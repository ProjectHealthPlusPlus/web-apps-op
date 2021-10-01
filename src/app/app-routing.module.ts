import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";



/*rutas principales de la aplicación wi*/
const routes: Routes = [
  { path: '',redirectTo: '/medic-center',pathMatch: 'full'},
  { path: '/medic-center', component: HomeComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
