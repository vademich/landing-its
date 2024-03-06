import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MobileComponent } from './components/header/mobile/mobile.component';
import { MonitorComponent } from './components/header/monitor/monitor.component';
import { MainComponent } from './components/main/main.component';
import { TruckComponent } from './components/truck/truck.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileComponent,
    MonitorComponent,
    MainComponent,
    TruckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
