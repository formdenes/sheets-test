import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string;
  year;
  
  onActivate(componentRef){
    this.year = componentRef.works().year === "all" ? "" : componentRef.works().year;
    this.title = componentRef.works().title;
  }
}
