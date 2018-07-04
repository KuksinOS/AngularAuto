import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { CarsComponent } from './cars/cars.component';
import { OwnerCarsComponent } from './ownercars/ownercars.component';
import { OwnerCarDetailComponent } from './ownercar_detail/ownercar_detail.component';

export const router: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cars', component: CarsComponent },
    { path: 'ownercars', component: OwnerCarsComponent },
    { path: 'ownercar/:id', component: OwnerCarDetailComponent },
    { path: '**', redirectTo: '/' }
];


export const routes = RouterModule.forRoot(router, {
    useHash: true
});