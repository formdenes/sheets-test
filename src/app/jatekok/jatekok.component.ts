import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GlobalService } from '../global.service';

@Component({
  selector: 'app-jatekok',
  templateUrl: './jatekok.component.html',
  styleUrls: ['./jatekok.component.scss']
})
export class JatekokComponent implements OnInit {

  @Output() titleEvent = new EventEmitter<string>();

  jatekok = [];
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
      this.jatekok = data.jatekok[this.year];
    }
    else{
      for (let year in data.jatekok) {
        data.jatekok[year].forEach(dal => this.jatekok.push(dal));
      }
      
      this.jatekok.sort((x,y) =>{
        if (x.cim < y.cim) return -1;
        else return 1;        
      });
    }
  }

  works(){
    return {
      "year": this.year,
      "title": "Játékok",
    }
  }

}
