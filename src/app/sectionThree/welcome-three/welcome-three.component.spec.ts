import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeThreeComponent } from './welcome-three.component';

describe('WelcomeThreeComponent', () => {
  let component: WelcomeThreeComponent;
  let fixture: ComponentFixture<WelcomeThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeThreeComponent]
    });
    fixture = TestBed.createComponent(WelcomeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
