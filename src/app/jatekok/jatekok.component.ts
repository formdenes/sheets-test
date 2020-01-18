import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jatekok',
  templateUrl: './jatekok.component.html',
  styleUrls: ['./jatekok.component.scss']
})
export class JatekokComponent implements OnInit {

  @Output() titleEvent = new EventEmitter<string>();

  sheetsUrl = "https://sheets.googleapis.com/v4/spreadsheets/1ANA_-nr6RhTu7Opt_bFXZlafSkI-mtpoH_xnllvUIqg?key=AIzaSyADPIOpfmlHr-_Kx14R2ZZWEDWirPBirPY";

  valuesUrl = "https://sheets.googleapis.com/v4/spreadsheets/1ANA_-nr6RhTu7Opt_bFXZlafSkI-mtpoH_xnllvUIqg/values/2019?key=AIzaSyADPIOpfmlHr-_Kx14R2ZZWEDWirPBirPY";
  jatekok = [];
  sheets = [];
  year;

  constructor(private route: ActivatedRoute) {
    this.year = this.route.params["_value"].year;
    this.titleEvent.emit(this.year);
    if (this.year !== "all"){
      getSheetData(getValuesUrl(this.year))
      .then((data: any[]) => this.jatekok = data)
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
        allData.forEach((data: any[]) => {
          data.forEach(v => {
            this.jatekok.push(v)
          })
        })
        console.log(this.jatekok);
        this.jatekok.sort((x,y) =>{
          if (x.cim < y.cim) return -1;
          else return 1;        
        })
        setTimeout(()=>console.log("2",this.jatekok),3000)
        
      })
      .catch(err => console.error(err))
    }
   }

  ngOnInit() {
  }

  works(){
    return {
      "year": this.year,
      "title": "Játékok",
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



const getValuesUrl = (sheet: string) => `https://sheets.googleapis.com/v4/spreadsheets/1ANA_-nr6RhTu7Opt_bFXZlafSkI-mtpoH_xnllvUIqg/values/${sheet}?key=AIzaSyADPIOpfmlHr-_Kx14R2ZZWEDWirPBirPY`