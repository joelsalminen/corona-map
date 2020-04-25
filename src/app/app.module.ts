import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoronaComponent } from './corona/corona.component';
import { HttpClientModule } from '@angular/common/http';
import { MapChartComponent } from './map-chart/map-chart.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CoronaTableComponent } from './corona-table/corona-table.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [
    AppComponent,
    CoronaComponent,
    MapChartComponent,
    MainPageComponent,
    CoronaTableComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
