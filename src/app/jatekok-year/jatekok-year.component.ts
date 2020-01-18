import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jatekok-year',
  templateUrl: './jatekok-year.component.html',
  styleUrls: ['./jatekok-year.component.scss']
})
export class JatekokYearComponent implements OnInit {

  sheetsUrl = "https://sheets.googleapis.com/v4/spreadsheets/1ANA_-nr6RhTu7Opt_bFXZlafSkI-mtpoH_xnllvUIqg?key=AIzaSyADPIOpfmlHr-_Kx14R2ZZWEDWirPBirPY";
  years = [];

  constructor() {
    fetch(this.sheetsUrl)
      .then(resp => resp.json())
      .then(mysheat => this.years = mysheat.sheets.map(sheet => sheet.properties.title))
   }

  ngOnInit() {
  }
  works(){
    return {
      "title": "Játékok",
    }
  }

}
