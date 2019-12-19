import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dal',
  templateUrl: './dal.component.html',
  styleUrls: ['./dal.component.scss']
})
export class DalComponent implements OnChanges {

  @Input() dal;
  @Input() title: string = "Title";
  @Input() text: string = "Szöveg";
  @Input() author: string = "Feltöltő";

  constructor() {
  }

  ngOnChanges(){
    /* this.title = this.dal.cim.replace(/\n/g, "<br>");
    this.text = this.dal.szoveg.replace(/\n/g, "<br>");
    this.author = this.dal.nev.replace(/\n/g, "<br>"); */
  }

}
