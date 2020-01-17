import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigateComponent } from './navigate/navigate.component';
import { HomeComponent } from './home/home.component';
import { NepdalokComponent } from './nepdalok/nepdalok.component';
import { JatekokComponent } from './jatekok/jatekok.component';
import { DalComponent } from './dal/dal.component';
import { NepdalokYearComponent } from './nepdalok-year/nepdalok-year.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    HomeComponent,
    NepdalokComponent,
    JatekokComponent,
    DalComponent,
    NepdalokYearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
