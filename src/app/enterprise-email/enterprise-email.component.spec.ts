import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseEmailComponent } from './enterprise-email.component';

describe('EnterpriseEmailComponent', () => {
  let component: EnterpriseEmailComponent;
  let fixture: ComponentFixture<EnterpriseEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
