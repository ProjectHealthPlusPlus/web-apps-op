import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Appointment} from "../interfaces/appointment";

@Component({
  selector: 'app-patients-pop-up',
  templateUrl: './patients-pop-up.component.html',
  styleUrls: ['./patients-pop-up.component.css']
})
export class PatientsPopUpComponent implements OnInit {
  hour: any[] = [
    '9:30','10:00','10:30','11:00','11:30',
    '12:00','12:30','13:00','13:30','14:00'
  ]
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private _snackbar: MatSnackBar) {
    this.form = this.fb.group({
      speciality: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      hour: ['', Validators.required],
      doctor: ['']
    })
  }

  ngOnInit(): void {
  }
  newAppointment() {
    console.log(this.form);

    const appointment: Appointment = {
      speciality: this.form.value.speciality,
      description: this.form.value.description,
      date: this.form.value.date,
      hour: this.form.value.hour,
      doctor: this.form.value.doctor
    }
    this._snackbar.open('You have successfully booked an appointment!','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
