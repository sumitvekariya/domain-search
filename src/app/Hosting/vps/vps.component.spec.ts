import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VPSComponent } from './vps.component';

describe('VPSComponent', () => {
  let component: VPSComponent;
  let fixture: ComponentFixture<VPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VPSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
