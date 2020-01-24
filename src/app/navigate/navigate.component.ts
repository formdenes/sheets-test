import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

  @Input() title;
  @Input() year;
  @Input() years: {dalok: string[], jatekok: string[]};

  expand: {dalokNav: boolean, jatekokNav: boolean} = {
    dalokNav: false,
    jatekokNav: false
  }

  constructor() { }

  ngOnInit() {
  }
  
  onMouseOver(menuItem: string){
    this.expand[menuItem]=true;
  }

  onMouseOut(menuItem: string){
    this.expand[menuItem]=false;
  }

  onNavigate(e:Event) {
    let anchor: EventTarget = e.target;
    console.log(anchor.href);
    e.preventDefault();
  }

}
