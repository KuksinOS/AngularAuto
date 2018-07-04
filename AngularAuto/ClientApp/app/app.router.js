import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { OwnerCarsComponent } from './ownercars/ownercars.component';
import { OwnerCarDetailComponent } from './ownercar_detail/ownercar_detail.component';
export var router = [
    { path: '', component: HomeComponent },
    { path: 'cars', component: CarsComponent },
    { path: 'ownercars', component: OwnerCarsComponent },
    { path: 'ownercar/:id', component: OwnerCarDetailComponent },
    { path: '**', redirectTo: '/' }
];
export var routes = RouterModule.forRoot(router, {
    useHash: true
});
//# sourceMappingURL=app.router.js.map