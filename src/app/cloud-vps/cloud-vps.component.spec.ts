import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudVpsComponent } from './cloud-vps.component';

describe('CloudVpsComponent', () => {
  let component: CloudVpsComponent;
  let fixture: ComponentFixture<CloudVpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudVpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudVpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
