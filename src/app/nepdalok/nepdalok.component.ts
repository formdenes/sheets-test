import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nepdalok',
  templateUrl: './nepdalok.component.html',
  styleUrls: ['./nepdalok.component.scss']
})
export class NepdalokComponent implements OnInit {

  @Output() titleEvent = new EventEmitter<string>();

  sheetsUrl = "https://sheets.googleapis.com/v4/spreadsheets/1Ri3Yi1oOxHSJYPamtRdUYniV_-yChKRajrB_W5C42S4?key=AIzaSyADPIOpfmlHr-_Kx14R2ZZWEDWirPBirPY";

  valuesUrl = "https://sheets.googleapis.com/v4/spreadsheets/1Ri3Yi1oOxHSJYPamtRdUYniV_-yChKRajrB_W5C42S4/values/2019?key=AIzaSyADPIOpfmlHr-_Kx14R2ZZWEDWirPBirPY";
  dalok = [];
  sheets = [];
  year;

  constructor(private route: ActivatedRoute) {
    this.year = this.route.params["_value"].year;
    this.titleEvent.emit(this.year);
    if (this.year !== "all"){
      getSheetData(getValuesUrl(this.year))
      .then(data => this.dalok = data)
    }
    else{
    fetch(this.sheetsUrl)
      .then(resp => resp.json())
      .then(mysheet => {
        return mysheet.sheets.map(sheet => sheet.properties.title)
      })
      .then(sheets => {
        this.sheets = sheets;
        let promises = sheets.map(sheet => getSheetData(getValuesUrl(sheet)));
        return Promise.all(promises)
        // return getSheetData(getValuesUrl(sheets[0]));
      })
      .then(allData => {
        allData.forEach(data => {
          data.forEach(v => {
            this.dalok.push(v)
          })
        })
        console.log(this.dalok);
        this.dalok.sort((x,y) =>{
          if (x.cim < y.cim) return -1;
          else return 1;        
        })
        setTimeout(()=>console.log("2",this.dalok),3000)
        
      })
      .catch(err => console.error(err))
    }
   }

  ngOnInit() {
  }

  works(){
    return {
      "year": this.year,
      "title": "Népdalok",
    }
  }

}


const getSheetData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let values = data.values;
        let formattedData = [];
        // console.log(values);
        values.forEach((row, i) => {
          if (i > 0){
            let rowObj = {};
            row.forEach((cell, j) => {
              rowObj[values[0][j]] = cell;
            });
            formattedData.push(rowObj);
          }
        })
        formattedData.sort((x,y) =>{
          if (x.cim < y.cim) return -1;
          else return 1;        
        })
        resolve(formattedData);
      })
      .catch(err => resolve([]))
  })
}



const getValuesUrl = (sheet: string) => `https://sheets.googleapis.com/v4/spreadsheets/1Ri3Yi1oOxHSJYPamtRdUYniV_-yChKRajrB_W5C42S4/values/${sheet}?key=AIzaSyADPIOpfmlHr-_Kx14R2ZZWEDWirPBirPY`