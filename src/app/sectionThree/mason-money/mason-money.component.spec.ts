import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonMoneyComponent } from './mason-money.component';

describe('MasonMoneyComponent', () => {
  let component: MasonMoneyComponent;
  let fixture: ComponentFixture<MasonMoneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasonMoneyComponent]
    });
    fixture = TestBed.createComponent(MasonMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
