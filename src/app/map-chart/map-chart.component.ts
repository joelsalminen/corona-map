import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import { ICountry } from '../corona/countries';
import { IMapData } from '../corona/mapData';

@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.css'],
})
export class MapChartComponent implements OnInit {
  @Input() countryData: IMapData[] = [];
  @Output() countryClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.populateMap(this.countryData);
  }

  populateMap(countryData: IMapData[]): void {
    var chart = am4core.create('chartdiv', am4maps.MapChart);

    chart.geodata = am4geodata_worldLow;
    chart.projection = new am4maps.projections.Miller();

    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    var polygonTemplate = polygonSeries.mapPolygons.template;

    // Configure tooltip
    polygonTemplate.tooltipText = '{name}';
    polygonTemplate.fill = am4core.color('#999');
    polygonTemplate.tooltipText = '{name}: {value}';
    polygonTemplate.events.on('hit', (e) => {
      console.log(e.target.dataItem.dataContext);
      this.onClick(e.target.dataItem.dataContext);
    });

    var hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#69A2B0');

    // Remove Antarctica
    polygonSeries.exclude = ['AQ'];

    // Add heat rule
    polygonSeries.heatRules.push({
      property: 'fill',
      target: polygonSeries.mapPolygons.template,
      min: am4core.color('#ffbaa5'),
      max: am4core.color('#701a00'),
    });

    // Add expectancy data
    polygonSeries.data = countryData;
  }

  onClick(object: any): void {
    console.log('onclick');
    this.countryClick.emit(object.id);
  }
}
