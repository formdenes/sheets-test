import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nepdalok',
  templateUrl: './nepdalok.component.html',
  styleUrls: ['./nepdalok.component.scss']
})
export class NepdalokComponent implements OnInit {

  url = "https://sheets.googleapis.com/v4/spreadsheets/1Ri3Yi1oOxHSJYPamtRdUYniV_-yChKRajrB_W5C42S4/values/Sheet1?key=AIzaSyADPIOpfmlHr-_Kx14R2ZZWEDWirPBirPY";
  dalok = {};

  constructor() {
    fetch(this.url)
      .then((resp) => resp.json())
      .then((data) => {
        let originalData = data.values
        let formattedData = [];
        originalData.forEach((row, i) => {
          if (i > 0){
            let rowObj = {};
            row.forEach((cell, j) => {
              rowObj[originalData[0][j]] = cell;
            });
            formattedData.push(rowObj);
          }
        })
        console.log(formattedData);
        this.dalok = formattedData;
        formattedData.sort((x,y) =>{
          if (x.cim < y.cim) return -1;
          else return 1;        
        })
      }
      )
      .catch(function(error){
        console.log(error);        
      })
   }

  ngOnInit() {
  }

}
