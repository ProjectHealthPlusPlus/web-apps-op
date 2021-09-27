import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularMaterialModule} from "./angular-material.module";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import {RegisterComponent} from "./components/register/register.component";
import {AppRoutingModule} from "./app-routing.module";
import {LogInComponent} from "./components/log-in/log-in.component";
import {HeaderComponent} from "./shared/header/header.component";
import {StickerComponent} from "./free-components/sticker/sticker.component";
import {MatIconModule} from "@angular/material/icon";
import {SnackbarComponent} from "./components/us_pacient/appointment/frecuent/snackbar.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogInComponent,
    HeaderComponent,
    StickerComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
