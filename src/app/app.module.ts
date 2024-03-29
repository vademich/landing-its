import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MobileComponent } from './components/header/mobile/mobile.component';
import { MonitorComponent } from './components/header/monitor/monitor.component';
import { MainComponent } from './components/main/main.component';
import { TruckComponent } from './components/truck/truck.component';
import { GeographyComponent } from './components/geography/geography.component';
import { TeamComponent } from './components/team/team.component';
import { Slider1Component } from './components/team/slider-1/slider-1.component';
import { Slider2Component } from './components/team/slider-2/slider-2.component';
import { Slider3Component } from './components/team/slider-3/slider-3.component';
import { Slider4Component } from './components/team/slider-4/slider-4.component';
import { GroupComponent } from './components/group/group.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileComponent,
    MonitorComponent,
    MainComponent,
    TruckComponent,
    GeographyComponent,
    TeamComponent,
    Slider1Component,
    Slider2Component,
    Slider3Component,
    Slider4Component,
    GroupComponent,
    ContactsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
