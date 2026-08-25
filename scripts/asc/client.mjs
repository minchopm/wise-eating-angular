/**
 * A minimal App Store Connect API client.
 *
 * Exists because two of the things this site claims cannot be checked any
 * other way. The pricing page promises what each paid tier contains, and those
 * lists were reconstructed from the App Store description rather than from the
 * products themselves — a commercial promise nobody has verified. And the only
 * place users describe problems in their own words is the reviews, which
 * currently nothing reads.
 *
 * Authentication is ES256 with three inputs: the key id, the issuer id, and
 * the private key. Team id is not part of this API, whatever the other Apple
 * APIs want.
 *
 * The key is read from disk at the path in .env and never logged, never
 * copied, and never leaves this process except as a signature. That is not
 * ceremony: a .p8 was committed to this repo once and has been public on
 * GitHub ever since, because removing a file does not remove the commit.
 */
import { createSign } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const HOST = 'https://api.appstoreconnect.apple.com';

const b64url = (input) =>
  Buffer.from(input).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

/**
 * Mint a token.
 *
 * Apple rejects anything older than twenty minutes, so these are made per run
 * and never stored. `aud` is fixed by Apple and `iss` is the issuer id from
 * App Store Connect — the one value that is not derivable from the key file.
 */
async function token({ keyId, issuerId, keyPath }) {
  const key = await readFile(keyPath, 'utf8');
  const header = { alg: 'ES256', kid: keyId, typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const payload = { iss: issuerId, iat: now, exp: now + 15 * 60, aud: 'appstoreconnect-v1' };

  const body = `${b64url(JSON.stringify(header))}.${b64url(JSON.stringify(payload))}`;
  const signer = createSign('SHA256');
  signer.update(body);
  signer.end();
  // Apple wants the raw r||s pair, not the DER wrapper Node produces by default.
  const signature = signer.sign({ key, dsaEncoding: 'ieee-p1363' });
  return `${body}.${signature.toString('base64url')}`;
}

export async function connect(config) {
  const jwt = await token(config);

  /** GET a path, following pagination to the end. */
  async function get(path, { all = false } = {}) {
    let url = path.startsWith('http') ? path : `${HOST}${path}`;
    const collected = [];
    let included = [];

    for (;;) {
      const response = await fetch(url, { headers: { Authorization: `Bearer ${jwt}` } });
      if (!response.ok) {
        const detail = await response.text();
        // Apple's errors are informative and worth surfacing verbatim: a wrong
        // issuer id and an unauthorised key fail differently, and the message
        // is the fastest way to tell which happened.
        throw new Error(`${response.status} ${response.statusText} — ${detail.slice(0, 400)}`);
      }
      const json = await response.json();
      collected.push(...(Array.isArray(json.data) ? json.data : [json.data]));
      if (json.included) included = included.concat(json.included);
      if (!all || !json.links?.next) return { data: collected, included };
      url = json.links.next;
    }
  }

  return { get };
}

/** Read config from .env without pulling in a dependency for six lines. */
export async function configFromEnv(root) {
  const text = await readFile(new URL('.env', root), 'utf8').catch(() => '');
  const env = Object.fromEntries(
    text
      .split('\n')
      .filter((line) => line.includes('=') && !line.trim().startsWith('#'))
      .map((line) => {
        const at = line.indexOf('=');
        return [line.slice(0, at).trim(), line.slice(at + 1).trim()];
      }),
  );

  const missing = ['ASC_KEY_ID', 'ASC_ISSUER_ID', 'ASC_KEY_PATH'].filter((k) => !env[k]);
  if (missing.length) {
    throw new Error(
      `Missing in .env: ${missing.join(', ')}\n\n` +
        'ASC_ISSUER_ID is the one that is not on this machine. It is in App Store\n' +
        'Connect under Users and Access → Integrations → App Store Connect API,\n' +
        'above the key list, and looks like 69a6de7a-0000-0000-0000-000000000000.',
    );
  }

  return {
    keyId: env.ASC_KEY_ID,
    issuerId: env.ASC_ISSUER_ID,
    keyPath: env.ASC_KEY_PATH.replace(/^~/, process.env.HOME),
  };
}
