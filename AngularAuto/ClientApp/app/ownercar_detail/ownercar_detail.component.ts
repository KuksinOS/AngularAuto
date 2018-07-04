import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { OwnerCar } from '../_models/ownercar';
import { OwnerCarsService } from '../_services/ownercarservice';
import { Car } from '../_models/car';
import { CarsService } from '../_services/carservice';


@Component({
    selector: 'app-ownercar_detail',
    templateUrl: './ownercar_detail.component.html',
    providers: [OwnerCarsService, CarsService]
})
export class OwnerCarDetailComponent implements OnInit {

    id: number;
    car: Car;
    ownercar: OwnerCar;
    cars: Car[];

    loaded: boolean = false;

    constructor(private ownercarsService: OwnerCarsService, private carsService: CarsService, private route: ActivatedRoute,
        private router: Router) {
        this.id = Number.parseInt(route.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id) {
            this.carsService.getCarsByNoOwner()
                .subscribe((data: OwnerCar) => { this.ownercar = data; this.loaded = true; });
            this.loadCars(); 
        }
    }
        // получаем данные через сервис
    loadCars() {
            
             this.carsService.getCars()
                 .subscribe((data: Car[]) => this.cars = data);

    }

    getvselectedCars() {
        return this.cars
            .filter(car => car.ownercar_id!=null)
          
    }

    onCheckboxCange(car: Car, event: any) {
        if (event.target.checked) 
            car.ownercar_id = this.id;
        else
            car.ownercar_id = null;
    }

    save() {
        //console.log(this.getvselectedCars()); 
        
        this.ownercarsService.updateUpdateCarsByOwner(this.id, this.getvselectedCars());
            


    }




    
}