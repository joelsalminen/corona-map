import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  started: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleStarted(): void {
    this.started = !this.started;
    console.log(this.started);
  }
}
