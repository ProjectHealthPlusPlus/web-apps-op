import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from "@angular/material/button";
import { MatIconModule} from "@angular/material/icon";
import { MedicalCenterComponent } from './medical-center/medical-center.component';
import { DoctorsComponent } from './doctors/pages/doctors/doctors.component';
import { AboutComponent } from './public/about/about.component';
import { PatientsComponent } from './patients/patients.component';
import { HomeComponent } from './public/home/home.component';
import { DiagnosticsComponent } from './doctors/pages/diagnostics/diagnostics.component';

import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { ScheduleComponent } from './doctors/pages/schedule/schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MedicalCenterComponent,
    DoctorsComponent,
    AboutComponent,
    PatientsComponent,
    HomeComponent,
    DiagnosticsComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,

    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
