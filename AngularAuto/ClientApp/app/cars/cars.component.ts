import { Component, OnInit } from '@angular/core';
import { CarsService } from '../_services/carservice';
import { Car } from '../_models/car';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    //styleUrls: ['./cars.component.css'],
    providers: [CarsService]
})
export class CarsComponent implements OnInit {

    car: Car = new Car();   // изменяемый товар
    cars: Car[];                // массив товаров
    tableMode: boolean = true;          // табличный режим

    constructor(private carsService: CarsService) { }

    ngOnInit() {
        this.loadCars();    // загрузка данных при старте компонента  
    }
    // получаем данные через сервис
    loadCars() {
        this.carsService.getCars()
            .subscribe((data: Car[]) => {
                this.cars = data
               // console.log(this.cars)
                return this.cars
            });
       // this.carsService.getCars()
       //     .subscribe((data: Car[]) => this.cars = data);
       
    }
    // сохранение данных
    save() {
        if (this.car.id == null) {
            this.carsService.createCar(this.car)
                .subscribe((data: Car) => this.cars.push(data));
        } else {
            this.carsService.updateCar(this.car)
                .subscribe(data => this.loadCars());
        }
        this.cancel();
    }
    editCar(c: Car) {
        this.car = c;
    }
    cancel() {
        this.car = new Car();
        this.tableMode = true;
    }
    delete(c: Car) {
        this.carsService.deleteCar(c.id)
            .subscribe(data => this.loadCars());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}