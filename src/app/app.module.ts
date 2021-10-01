import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './medic-center/home/home.component';
import { DiagnosticsComponent } from './medic-center/diagnostics/diagnostics.component';
import { DoctorsComponent } from './medic-center/doctors/doctors.component';
import { PatientsComponent } from './medic-center/patients/patients.component';
import { MedicalCenterComponent } from './medic-center/medical-center/medical-center.component';
import { AboutComponent } from './medic-center/about/about.component';
import {HeaderModule} from "./layout/header/header.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiagnosticsComponent,
    DoctorsComponent,
    PatientsComponent,
    MedicalCenterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
