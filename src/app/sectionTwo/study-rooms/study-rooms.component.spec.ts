import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyRoomsComponent } from './study-rooms.component';

describe('StudyRoomsComponent', () => {
  let component: StudyRoomsComponent;
  let fixture: ComponentFixture<StudyRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudyRoomsComponent]
    });
    fixture = TestBed.createComponent(StudyRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
