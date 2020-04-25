import { Component, OnInit, Input } from '@angular/core';
import { ICountry } from '../corona/countries';

@Component({
  selector: 'app-corona-table',
  templateUrl: './corona-table.component.html',
  styleUrls: ['./corona-table.component.css'],
})
export class CoronaTableComponent implements OnInit {
  @Input() country: ICountry;
  constructor() {}

  ngOnInit(): void {}
}
