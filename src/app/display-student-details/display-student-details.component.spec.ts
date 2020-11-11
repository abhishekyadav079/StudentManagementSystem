import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStudentDetailsComponent } from './display-student-details.component';

describe('DisplayStudentDetailsComponent', () => {
  let component: DisplayStudentDetailsComponent;
  let fixture: ComponentFixture<DisplayStudentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayStudentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
