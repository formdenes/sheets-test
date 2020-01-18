import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jatek',
  templateUrl: './jatek.component.html',
  styleUrls: ['./jatek.component.scss']
})
export class JatekComponent implements OnInit {

  @Input() jatek;
  @Input() title: string = "Title";
  @Input() text: string = "Szöveg";
  @Input() author: string = "Feltöltő";
  @Input() link: string = "Youtube";

  constructor() { }

  ngOnInit() {
  }

}
