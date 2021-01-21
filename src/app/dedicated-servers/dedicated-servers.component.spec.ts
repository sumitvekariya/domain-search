import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicatedServersComponent } from './dedicated-servers.component';

describe('DedicatedServersComponent', () => {
  let component: DedicatedServersComponent;
  let fixture: ComponentFixture<DedicatedServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DedicatedServersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DedicatedServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
