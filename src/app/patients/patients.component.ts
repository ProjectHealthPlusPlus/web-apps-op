import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PatientsPopUpComponent} from "./patients-pop-up/patients-pop-up.component";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit{

  panelOpenState = false;
  constructor(  public dialog: MatDialog) { }
  openForm() {
    this.dialog.open(PatientsPopUpComponent);
  }

  ngOnInit(): void {

  }


}
