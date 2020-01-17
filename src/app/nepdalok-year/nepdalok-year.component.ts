import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nepdalok-year',
  templateUrl: './nepdalok-year.component.html',
  styleUrls: ['./nepdalok-year.component.scss']
})
export class NepdalokYearComponent implements OnInit {

  sheetsUrl = "https://sheets.googleapis.com/v4/spreadsheets/1Ri3Yi1oOxHSJYPamtRdUYniV_-yChKRajrB_W5C42S4?key=AIzaSyADPIOpfmlHr-_Kx14R2ZZWEDWirPBirPY";
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
      "title": "Népdalok",
    }
  }
}
