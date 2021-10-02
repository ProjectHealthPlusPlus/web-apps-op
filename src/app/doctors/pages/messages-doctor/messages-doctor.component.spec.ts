import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesDoctorComponent } from './messages-doctor.component';

describe('MessagesDoctorComponent', () => {
  let component: MessagesDoctorComponent;
  let fixture: ComponentFixture<MessagesDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
