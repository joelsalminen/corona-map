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
  countryData: any = [];
  selectedCountry: ICountry;

  constructor(private coronaService: CoronaService) {}

  ngOnInit(): void {
    this.coronaService.getCoronaData().subscribe({
      next: (coronaData) => {
        this.countries = coronaData.Countries;
        this.countryData = this.countries.map((country) => ({
          id: country.CountryCode,
          value: country.TotalConfirmed,
        }));
        console.log(coronaData.Countries);
      },
    });
  }

  onCountryClick(id: string): void {
    this.selectedCountry = this.countries.find(
      (country: ICountry) => country.CountryCode === id
    );
    console.log('received id:', id);
  }
}
