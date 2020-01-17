import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigateComponent } from './navigate/navigate.component';
import { HomeComponent } from './home/home.component';
import { NepdalokComponent } from './nepdalok/nepdalok.component';
import { JatekokComponent } from './jatekok/jatekok.component';
import { NepdalokYearComponent } from './nepdalok-year/nepdalok-year.component';


const routes: Routes = [
  { path: "", component:  HomeComponent},
  { path: "nepdalok", component: NepdalokYearComponent},
  { path: "nepdalok/:year", component: NepdalokComponent},
  { path: "jatekok", component: JatekokComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
