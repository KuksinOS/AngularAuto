import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { OwnerCarsService, CarsService } from './_services/index';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { OwnerCarsComponent } from './ownercars/ownercars.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OwnerCarDetailComponent } from './ownercar_detail/ownercar_detail.component';

import { routes } from './app.router';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CarsComponent,
        OwnerCarsComponent,
        OwnerCarDetailComponent,
        NotfoundComponent
    ],
    imports: [
        routes, BrowserModule, FormsModule, HttpClientModule  
    ],
    providers: [CarsService, OwnerCarsService],
    bootstrap: [AppComponent]
})
export class AppModule { }