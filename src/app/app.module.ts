import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { MedicalCenterComponent } from './medical-center/medical-center.component';
import { AboutComponent } from './about/about.component';
import {HeaderModule} from "./layout/header/header.module";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

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
    RouterModule,
    /*routing agrega this->:*/
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
