import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperHostingComponent } from './developer-hosting.component';

describe('DeveloperHostingComponent', () => {
  let component: DeveloperHostingComponent;
  let fixture: ComponentFixture<DeveloperHostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperHostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
