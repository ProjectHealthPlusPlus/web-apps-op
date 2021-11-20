import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsPopUpComponent } from './patients-pop-up.component';

describe('PatientsPopUpComponent', () => {
  let component: PatientsPopUpComponent;
  let fixture: ComponentFixture<PatientsPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
