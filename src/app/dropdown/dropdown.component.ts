import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  //sheetsUrl = "https://sheets.googleapis.com/v4/spreadsheets/1Ri3Yi1oOxHSJYPamtRdUYniV_-yChKRajrB_W5C42S4?key=AIzaSyADPIOpfmlHr-_Kx14R2ZZWEDWirPBirPY";
  @Input() years: string[] = [];

  constructor()  {
  }
  
  ngOnInit() {
    console.log(this.years);
  }

}
