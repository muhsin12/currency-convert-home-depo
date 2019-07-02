import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { AwesomeTooltipDirective } from './awesome-tooltip.directive';
import { HomeDepotooltipComponent } from './home-depotooltip/home-depotooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRateComponent,
    AwesomeTooltipDirective,
    HomeDepotooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OverlayModule ,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HomeDepotooltipComponent],
})
export class AppModule { }
