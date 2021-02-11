import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleskComponent } from './plesk.component';

describe('PleskComponent', () => {
  let component: PleskComponent;
  let fixture: ComponentFixture<PleskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PleskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PleskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
