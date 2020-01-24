import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string;
  year;
  years: {dalok:string[], jatekok: string[]};
  dalokURL: string = "https://sheets.googleapis.com/v4/spreadsheets/1Ri3Yi1oOxHSJYPamtRdUYniV_-yChKRajrB_W5C42S4?key=AIzaSyADPIOpfmlHr-_Kx14R2ZZWEDWirPBirPY";
  jatekokURL: string = "https://sheets.googleapis.com/v4/spreadsheets/1ANA_-nr6RhTu7Opt_bFXZlafSkI-mtpoH_xnllvUIqg?key=AIzaSyADPIOpfmlHr-_Kx14R2ZZWEDWirPBirPY";

  constructor () {
    this.years = {
      dalok: [],
      jatekok: []
    }

    fetch(this.dalokURL)
      .then(resp => resp.json())
      .then(mysheat => this.years.dalok = mysheat.sheets.map(sheet => sheet.properties.title))
      .then( () => fetch(this.jatekokURL))
      .then(resp => resp.json())
      .then(mysheat => this.years.jatekok = mysheat.sheets.map(sheet => sheet.properties.title))
      .then(() => console.log(this.years))
  }
  
  onActivate(componentRef){
    if(componentRef.works){
      this.year = componentRef.works().year === "all" ? "" : componentRef.works().year;
      this.title = componentRef.works().title;
    }
  }
}
