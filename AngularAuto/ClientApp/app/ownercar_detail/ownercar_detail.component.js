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
import { Router, ActivatedRoute } from '@angular/router';
import { OwnerCarsService } from '../_services/ownercarservice';
import { CarsService } from '../_services/carservice';
var OwnerCarDetailComponent = /** @class */ (function () {
    function OwnerCarDetailComponent(ownercarsService, carsService, route, router) {
        this.ownercarsService = ownercarsService;
        this.carsService = carsService;
        this.route = route;
        this.router = router;
        this.loaded = false;
        this.id = Number.parseInt(route.snapshot.params["id"]);
    }
    OwnerCarDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id) {
            this.carsService.getCarsByNoOwner()
                .subscribe(function (data) { _this.ownercar = data; _this.loaded = true; });
            this.loadCars();
        }
    };
    // получаем данные через сервис
    OwnerCarDetailComponent.prototype.loadCars = function () {
        var _this = this;
        this.carsService.getCars()
            .subscribe(function (data) { return _this.cars = data; });
    };
    OwnerCarDetailComponent.prototype.getvselectedCars = function () {
        return this.cars
            .filter(function (car) { return car.ownercar_id != null; });
    };
    OwnerCarDetailComponent.prototype.onCheckboxCange = function (car, event) {
        if (event.target.checked)
            car.ownercar_id = this.id;
        else
            car.ownercar_id = null;
    };
    OwnerCarDetailComponent.prototype.save = function () {
        //console.log(this.getvselectedCars()); 
        this.ownercarsService.updateUpdateCarsByOwner(this.id, this.getvselectedCars());
    };
    OwnerCarDetailComponent = __decorate([
        Component({
            selector: 'app-ownercar_detail',
            templateUrl: './ownercar_detail.component.html',
            providers: [OwnerCarsService, CarsService]
        }),
        __metadata("design:paramtypes", [OwnerCarsService, CarsService, ActivatedRoute,
            Router])
    ], OwnerCarDetailComponent);
    return OwnerCarDetailComponent;
}());
export { OwnerCarDetailComponent };
//# sourceMappingURL=ownercar_detail.component.js.map