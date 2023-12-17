import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionalQsComponent } from './directional-qs.component';

describe('DirectionalQsComponent', () => {
  let component: DirectionalQsComponent;
  let fixture: ComponentFixture<DirectionalQsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectionalQsComponent]
    });
    fixture = TestBed.createComponent(DirectionalQsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
