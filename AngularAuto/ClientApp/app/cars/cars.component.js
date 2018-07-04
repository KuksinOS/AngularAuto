var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { CarsService } from '../_services/carservice';
import { Car } from '../_models/car';
var CarsComponent = /** @class */ (function () {
    function CarsComponent(carsService) {
        this.carsService = carsService;
        this.car = new Car(); // изменяемый товар
        this.tableMode = true; // табличный режим
    }
    CarsComponent.prototype.ngOnInit = function () {
        this.loadCars(); // загрузка данных при старте компонента  
    };
    // получаем данные через сервис
    CarsComponent.prototype.loadCars = function () {
        var _this = this;
        this.carsService.getCars()
            .subscribe(function (data) {
            _this.cars = data;
            // console.log(this.cars)
            return _this.cars;
        });
        // this.carsService.getCars()
        //     .subscribe((data: Car[]) => this.cars = data);
    };
    // сохранение данных
    CarsComponent.prototype.save = function () {
        var _this = this;
        if (this.car.id == null) {
            this.carsService.createCar(this.car)
                .subscribe(function (data) { return _this.cars.push(data); });
        }
        else {
            this.carsService.updateCar(this.car)
                .subscribe(function (data) { return _this.loadCars(); });
        }
        this.cancel();
    };
    CarsComponent.prototype.editCar = function (c) {
        this.car = c;
    };
    CarsComponent.prototype.cancel = function () {
        this.car = new Car();
        this.tableMode = true;
    };
    CarsComponent.prototype.delete = function (c) {
        var _this = this;
        this.carsService.deleteCar(c.id)
            .subscribe(function (data) { return _this.loadCars(); });
    };
    CarsComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    CarsComponent = __decorate([
        Component({
            selector: 'app-cars',
            templateUrl: './cars.component.html',
            //styleUrls: ['./cars.component.css'],
            providers: [CarsService]
        }),
        __metadata("design:paramtypes", [CarsService])
    ], CarsComponent);
    return CarsComponent;
}());
export { CarsComponent };
//# sourceMappingURL=cars.component.js.map