import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAppStoreScreenshotHeroComponent } from './app-app-store-screenshot-hero.component';

describe('AppAppStoreScreenshotHeroComponent', () => {
  let component: AppAppStoreScreenshotHeroComponent;
  let fixture: ComponentFixture<AppAppStoreScreenshotHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAppStoreScreenshotHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAppStoreScreenshotHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
