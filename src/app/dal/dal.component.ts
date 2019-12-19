import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dal',
  templateUrl: './dal.component.html',
  styleUrls: ['./dal.component.scss']
})
export class DalComponent implements OnInit {

  @Input() title: string = "Title";
  @Input() text: string = "Szöveg";
  @Input() author: string = "Feltöltő";

  constructor() {
  }

  ngOnInit() {
  }

}
