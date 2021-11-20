import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DiagnosticsComponent} from "./diagnostics/diagnostics.component";
import {DoctorsComponent} from "./doctors/doctors.component";
import {PatientsComponent} from "./patients/patients.component";
import {MedicalCenterComponent} from "./medical-center/medical-center.component";
import {AboutComponent} from "./about/about.component";

/*rutas principales de la aplicación wi*/
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'diagnostics', component: DiagnosticsComponent},
  {path: 'doctors', component: DoctorsComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'medical-center', component: MedicalCenterComponent},
  {path: 'about', component: AboutComponent},
];


@NgModule({
  imports:[ RouterModule.forRoot( routes ) ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
