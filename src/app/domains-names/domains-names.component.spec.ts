import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainsNamesComponent } from './domains-names.component';

describe('DomainsNamesComponent', () => {
  let component: DomainsNamesComponent;
  let fixture: ComponentFixture<DomainsNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainsNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainsNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
