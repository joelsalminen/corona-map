import { Component, OnInit, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import { ICountry } from '../corona/countries';

@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.css'],
})
export class MapChartComponent implements OnInit {
  @Input() countries: ICountry[] = [];

  constructor() {}

  populateMap(countryData: ICountry[]): void {
    // Create map instance
    var chart = am4core.create('chartdiv', am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{name}';
    polygonTemplate.fill = am4core.color('#999');

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#ed8f1c');

    // Remove Antarctica
    polygonSeries.exclude = ['AQ'];
    polygonTemplate.tooltipText = '{name}: {value}';
    // Add heat rule
    polygonSeries.heatRules.push({
      property: 'fill',
      target: polygonSeries.mapPolygons.template,
      min: am4core.color('#ffbaa5'),
      max: am4core.color('#701a00'),
    });

    // Add expectancy data
    polygonSeries.data = countryData.map((country) => ({
      id: country.CountryCode,
      value: country.TotalConfirmed,
    }));
  }

  ngOnInit(): void {
    console.log(this.countries);
    this.populateMap(this.countries);
  }
}
