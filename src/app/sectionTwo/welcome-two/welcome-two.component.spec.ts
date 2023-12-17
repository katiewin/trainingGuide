import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeTwoComponent } from './welcome-two.component';

describe('WelcomeTwoComponent', () => {
  let component: WelcomeTwoComponent;
  let fixture: ComponentFixture<WelcomeTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeTwoComponent]
    });
    fixture = TestBed.createComponent(WelcomeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
