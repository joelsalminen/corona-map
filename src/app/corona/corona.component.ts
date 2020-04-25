import { Component, OnInit } from '@angular/core';
import { CoronaService } from './corona.service';
import { ICountry } from './countries';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css'],
})
export class CoronaComponent implements OnInit {
  countries: ICountry[];

  constructor(private coronaService: CoronaService) {}

  ngOnInit(): void {
    this.coronaService.getCoronaData().subscribe({
      next: (coronaData) => {
        this.countries = coronaData.Countries;
        console.log(coronaData.Countries);
      },
    });
  }
}
