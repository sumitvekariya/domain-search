import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteBackupComponent } from './website-backup.component';

describe('WebsiteBackupComponent', () => {
  let component: WebsiteBackupComponent;
  let fixture: ComponentFixture<WebsiteBackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteBackupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
