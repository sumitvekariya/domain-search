import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteSecurityComponent } from './website-security.component';

describe('WebsiteSecurityComponent', () => {
  let component: WebsiteSecurityComponent;
  let fixture: ComponentFixture<WebsiteSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
