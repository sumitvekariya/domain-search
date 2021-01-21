import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressHostingComponent } from './wordpress-hosting.component';

describe('WordpressHostingComponent', () => {
  let component: WordpressHostingComponent;
  let fixture: ComponentFixture<WordpressHostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpressHostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
