import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { MedicalCenterComponent } from './medical-center/medical-center.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AboutComponent } from './about/about.component';
import { PatientsComponent } from './patients/patients.component';
import { HomeComponent } from './home/home.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MedicalCenterComponent,
    DoctorsComponent,
    AboutComponent,
    PatientsComponent,
    HomeComponent,
    DiagnosticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

