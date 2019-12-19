import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nepdalok',
  templateUrl: './nepdalok.component.html',
  styleUrls: ['./nepdalok.component.scss']
})
export class NepdalokComponent implements OnInit {

  url = "https://sheetsu.com/apis/v1.0su/bcf3c593808f";
  dalok = {};

  constructor() {
    fetch(this.url)
      .then((resp) => resp.json())
      .then((data) => {
        this.dalok = data;
      }
      )
      .catch(function(error){
        console.log(error);        
      })
   }

  ngOnInit() {
  }

}
