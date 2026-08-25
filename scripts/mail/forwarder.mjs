/**
 * Forward mail addressed to wise-eating.com on to a real inbox.
 *
 * SES receives the message, drops the raw MIME into S3, and calls this. All
 * this does is re-send it — but the re-sending is the whole difficulty, and
 * the reason is authentication.
 *
 * A forwarded message arrives at Gmail from our servers while still claiming
 * to be From: whoever wrote it. SPF checks the envelope sender against the
 * sending IP and fails, and the original DKIM signature no longer matches a
 * body that has passed through us. Naive forwarding therefore lands in spam
 * or is rejected outright.
 *
 * The fix is the standard one: the message goes out From: an address on a
 * domain we do control and can sign, with the original writer moved into
 * Reply-To so hitting reply still reaches them. Their name is kept in the
 * display part, so the inbox still reads "Jane Smith" rather than a machine
 * address. The old DKIM-Signature and Return-Path headers are stripped
 * because they now describe a message that no longer exists.
 */
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { SendRawEmailCommand, SESClient } from '@aws-sdk/client-ses';

const s3 = new S3Client({});
const ses = new SESClient({});

const BUCKET = process.env.MAIL_BUCKET;
const PREFIX = process.env.MAIL_PREFIX ?? 'inbox/';
const FORWARD_TO = process.env.FORWARD_TO;
const FROM = process.env.FORWARD_FROM;

/** Headers that described the message before we touched it. */
const STRIP = new Set([
  'dkim-signature',
  'return-path',
  'sender',
  'received-spf',
  'authentication-results',
  'arc-authentication-results',
  'arc-message-signature',
  'arc-seal',
  'x-ses-receipt',
  'x-ses-dkim-signature',
  'reply-to',
]);

/** Split a raw message once, at the blank line that ends the headers. */
function split(raw) {
  const end = raw.search(/\r?\n\r?\n/);
  if (end === -1) return { head: raw, body: '' };
  const gap = /\r\n\r\n/.test(raw.slice(end, end + 4)) ? 4 : 2;
  return { head: raw.slice(0, end), body: raw.slice(end + gap) };
}

/**
 * Unfold header lines.
 *
 * A long header may be wrapped across several lines with leading whitespace,
 * so a naive split on newlines cuts one header into pieces and loses the ones
 * that matter — a wrapped From: is exactly the case this has to survive.
 */
function headerLines(head) {
  const out = [];
  for (const line of head.split(/\r?\n/)) {
    if (/^[ \t]/.test(line) && out.length) out[out.length - 1] += '\n' + line;
    else out.push(line);
  }
  return out;
}

function valueOf(lines, name) {
  const found = lines.find((line) => line.toLowerCase().startsWith(name + ':'));
  return found ? found.slice(name.length + 1).trim().replace(/\r?\n\s+/g, ' ') : '';
}

export async function handler(event) {
  const record = event.Records?.[0]?.ses;
  if (!record) return { ok: false, reason: 'not an SES event' };

  const key = PREFIX + record.mail.messageId;
  const object = await s3.send(new GetObjectCommand({ Bucket: BUCKET, Key: key }));
  const raw = await object.Body.transformToString('utf8');

  const { head, body } = split(raw);
  const lines = headerLines(head);

  const original = valueOf(lines, 'from') || 'unknown sender';
  const to = valueOf(lines, 'to');
  // The display name, if there is one, so the inbox does not fill up with a
  // column of identical addresses.
  const shown = (original.match(/^\s*"?([^"<]+?)"?\s*</) ?? [, original])[1].trim();

  const kept = lines.filter((line) => {
    const name = line.slice(0, line.indexOf(':')).toLowerCase();
    return name && !STRIP.has(name) && name !== 'from' && name !== 'to';
  });

  const rebuilt = [
    `From: "${shown.replace(/"/g, "'")} (via ${to || 'wise-eating.com'})" <${FROM}>`,
    `Reply-To: ${original}`,
    `To: ${FORWARD_TO}`,
    `X-Original-To: ${to}`,
    ...kept,
  ].join('\r\n');

  await ses.send(
    new SendRawEmailCommand({
      Source: FROM,
      Destinations: [FORWARD_TO],
      RawMessage: { Data: Buffer.from(rebuilt + '\r\n\r\n' + body, 'utf8') },
    }),
  );

  return { ok: true, from: original, to };
}
