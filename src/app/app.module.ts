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
import { JatekokYearComponent } from './jatekok-year/jatekok-year.component';
import { JatekComponent } from './jatek/jatek.component';
import { GlobalService } from './global.service';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    HomeComponent,
    NepdalokComponent,
    JatekokComponent,
    DalComponent,
    NepdalokYearComponent,
    JatekokYearComponent,
    JatekComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
