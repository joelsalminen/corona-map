import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoronaComponent } from './corona/corona.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, CoronaComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
