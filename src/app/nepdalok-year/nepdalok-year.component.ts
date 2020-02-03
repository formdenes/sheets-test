import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-nepdalok-year',
  templateUrl: './nepdalok-year.component.html',
  styleUrls: ['./nepdalok-year.component.scss']
})
export class NepdalokYearComponent implements OnInit {

  years = [];

  constructor(private globalService: GlobalService) {
  }

  ngOnInit() {
    //this.globalService.years$.subscribe(years => this.years = years.dalok.sort((a, b) => a - b));
    let years = JSON.parse(sessionStorage.getItem("years")).dalok;
    this.years = years;
  }
  works(){
    return {
      "title": "Népdalok",
    }
  }
}
