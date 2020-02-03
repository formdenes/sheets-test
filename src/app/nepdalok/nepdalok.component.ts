import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GlobalService } from '../global.service';

@Component({
  selector: 'app-nepdalok',
  templateUrl: './nepdalok.component.html',
  styleUrls: ['./nepdalok.component.scss']
})
export class NepdalokComponent implements OnInit {

  @Output() titleEvent = new EventEmitter<string>();

  dalok = [];
  year;

  constructor(private route: ActivatedRoute, private globalService: GlobalService) {
    this.year = this.route.params["_value"].year;
    this.titleEvent.emit(this.year);
   }

   ngOnInit() {
    this.getData();
  }

  getData(): void {
    let data = JSON.parse(sessionStorage.getItem("data"));
    if (this.year != "all") {
      this.dalok = data.dalok[this.year];
    }
    else{
      for (let year in data.dalok) {
        data.dalok[year].forEach(dal => this.dalok.push(dal));
      }
      
      this.dalok.sort((x,y) =>{
        if (x.cim < y.cim) return -1;
        else return 1;        
      });
    }
  }

  works(){
    return {
      "year": this.year,
      "title": "Népdalok",
    }
  }

}