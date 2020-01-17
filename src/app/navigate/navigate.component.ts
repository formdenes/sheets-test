import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

  @Input() title;
  @Input() year;

  constructor() { }

  ngOnInit() {
  }

}
