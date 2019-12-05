import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  template: `<p>{{name}}</p>  `,//'./intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }
  name="omer ozoglu"
  ngOnInit() {
  }

}
