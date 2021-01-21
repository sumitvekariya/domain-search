import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSecurityComponent } from './email-security.component';

describe('EmailSecurityComponent', () => {
  let component: EmailSecurityComponent;
  let fixture: ComponentFixture<EmailSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
