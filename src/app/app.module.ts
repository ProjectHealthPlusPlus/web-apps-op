import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HeaderComponent } from './header/header.component';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { HttpClientModule } from "@angular/common/http";
import { MatTooltipModule} from "@angular/material/tooltip";
import {MatTabsModule} from "@angular/material/tabs";
import {Component} from '@angular/core';
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
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule,
    HttpClientModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatTabsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

