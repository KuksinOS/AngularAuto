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
    carsbynoowner: Car[];
    carsbyowner: Car[];

    loadedownercar: boolean = false;
    loadedcars: boolean = false;

    constructor(private ownercarsService: OwnerCarsService, private carsService: CarsService, private route: ActivatedRoute,
        private router: Router) {
        this.id = Number.parseInt(route.snapshot.params["id"]);
    }

    ngOnInit() {
        this.carsbynoowner=[];
        this.carsbyowner = [];

        if (this.id) {

            this.ownercarsService.getOwnerCar(this.id)
                .subscribe((data: OwnerCar) => { this.ownercar = data; this.loadedownercar = true; });

            this.carsService.getCars()
                .subscribe((data: Car[]) => {
                    data.forEach(car => {
                        if (car.ownercar_id != null)
                            this.carsbyowner.push(car);
                        else
                            this.carsbynoowner.push(car);
                    });
                    this.loadedcars = true;     
                });
           // console.log();
            
        }
    }
       
    getCars() {

        var mergingcars = [
            ...this.carsbynoowner
            .filter(car => car.ownercar_id != null),
            ...this.carsbyowner
                .filter(car => car.ownercar_id == null)];

       // console.log(mergingcars);
        return mergingcars;
          
    }

    
    onCheckboxNoOwnerCange(car: Car, event: any) {
        if (event.target.checked) 
            car.ownercar_id = this.id;
        else
            car.ownercar_id = null;
    }

    onCheckboxOwnerCange(car: Car, event: any) {
        if (event.target.checked)
            car.ownercar_id = this.id;
        else
            car.ownercar_id = null;
    }

    async save() {
       // console.log(this.getCars()); 
       // location.reload()
        await this.ownercarsService.updateUpdateCarsByOwner(this.id, this.getCars());
       // this.ngOnInit();  
        
    }

 


    
}