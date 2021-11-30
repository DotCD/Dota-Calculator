import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { DisplayComponent } from './display/display.component';
import { SimpleStatsComponent } from './simple-stats/simple-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    DisplayComponent,
    SimpleStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
