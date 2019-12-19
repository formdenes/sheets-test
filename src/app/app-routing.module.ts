import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigateComponent } from './navigate/navigate.component';
import { HomeComponent } from './home/home.component';
import { NepdalokComponent } from './nepdalok/nepdalok.component';


const routes: Routes = [
  { path: "", component:  HomeComponent},
  { path: "nepdalok", component: NepdalokComponent},
  // { path: "jatekok", component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
