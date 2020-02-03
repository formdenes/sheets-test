import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../global.service';

@Component({
  selector: 'app-jatekok-year',
  templateUrl: './jatekok-year.component.html',
  styleUrls: ['./jatekok-year.component.scss']
})
export class JatekokYearComponent implements OnInit {

  years = [];

  constructor(private globalService: GlobalService) {
  }
  
  ngOnInit() {
    // this.globalService.years$.subscribe(years => this.years = years.jatekok.sort((a, b) => a - b));
    let years = JSON.parse(sessionStorage.getItem("years")).jatekok;
    this.years = years;
  }

  works(){
    return {
      "title": "Játékok",
    }
  }

}
