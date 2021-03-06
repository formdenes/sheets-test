import { Component } from '@angular/core';
import { GlobalService } from './global.service';

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
  data;
  constructor (private globalService: GlobalService) {
    // this.years = {
    //   dalok: [],
    //   jatekok: []
    // }
    // getYears()
    // .then((years: {dalok:string[], jatekok: string[]}) => {
    //   this.years = years;
    //   globalService.setYears(years);
    //   return getData(years);      
    // })
    // .then(data => {
    //   this.data = data;
    //   globalService.setData(data);
    // })
  }

  ngOnInit() {
  }

  
  onActivate(componentRef){
    if(componentRef.works){
      this.title = componentRef.works().title;	      this.year = componentRef.works().year === "all" ? "" : componentRef.works().year;
        this.title = componentRef.works().title;
      }
  }
}

const getURL = (sheet: string, value?: string, type: string = ""): string => {
  let sheetValue:string = "";
  let url:string = "";
  if (type === "data") {
    sheetValue = `/values/${value}`
  }
  if (sheet === "dalok") url = `https://sheets.googleapis.com/v4/spreadsheets/1Ri3Yi1oOxHSJYPamtRdUYniV_-yChKRajrB_W5C42S4${sheetValue}?key=AIzaSyADPIOpfmlHr-_Kx14R2ZZWEDWirPBirPY`;
  else url = `https://sheets.googleapis.com/v4/spreadsheets/1ANA_-nr6RhTu7Opt_bFXZlafSkI-mtpoH_xnllvUIqg${sheetValue}?key=AIzaSyADPIOpfmlHr-_Kx14R2ZZWEDWirPBirPY`;
  return url;
}

const getYears = () => {
  return new Promise((resolve, reject) => {
    let years: {dalok:string[], jatekok: string[]} = {
      dalok: [],
      jatekok: []
    }
    fetch(getURL("dalok"))
      .then(resp => resp.json())
      .then(mysheat => years.dalok = mysheat.sheets.map(sheet => sheet.properties.title))
      .then( () => fetch(getURL("jatekok")))
      .then(resp => resp.json())
      .then(mysheat => years.jatekok = mysheat.sheets.map(sheet => sheet.properties.title))
      .then(() => {
        resolve(years);
      })
      .then(() => resolve(years))
      .catch(err => resolve(years))
  })
}


const getSheetValues = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let values = data.values;
        let formattedData = [];
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

const getData = (years: {dalok:string[], jatekok: string[]}) => {
  return new Promise((resolve, reject) => {
    let data = {
      dalok: {},
      jatekok: {}
    };
        let promisesDalok = years.dalok.map(sheet => getSheetValues(getURL("dalok", sheet, "data")));
        let promiesesJatekok = years.jatekok.map(sheet => getSheetValues(getURL("jatekok", sheet, "data")));
        let promises = promisesDalok.concat(promiesesJatekok);
       Promise.all(promises)
      .then(allData => {
        const dalokLength = years.dalok.length;
        allData.forEach((sheet, i) => {
          if (i < dalokLength) {
            data.dalok[years.dalok[i]] = sheet;
          }
          else {
            data.jatekok[years.jatekok[i-dalokLength]] = sheet;
          }
        })
        resolve(data);
  })
})
}