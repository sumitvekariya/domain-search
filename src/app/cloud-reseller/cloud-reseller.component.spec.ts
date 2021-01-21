import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudResellerComponent } from './cloud-reseller.component';

describe('CloudResellerComponent', () => {
  let component: CloudResellerComponent;
  let fixture: ComponentFixture<CloudResellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudResellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudResellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
