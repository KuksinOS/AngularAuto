var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var CarsService = /** @class */ (function () {
    function CarsService(http) {
        this.http = http;
        this.url = "/api/Cars";
        this.urlcarsbyowner = "/api/Cars/CarsByOwner";
        this.urlcarsbynoowner = "/api/Cars/CarsByNoOwner";
    }
    CarsService.prototype.getCars = function () {
        return this.http.get(this.url);
    };
    CarsService.prototype.getCarByOwner = function (id) {
        return this.http.get(this.urlcarsbyowner + '/' + id);
    };
    CarsService.prototype.getCarsByNoOwner = function () {
        return this.http.get(this.urlcarsbynoowner);
    };
    CarsService.prototype.createCar = function (car) {
        return this.http.post(this.url, car);
    };
    CarsService.prototype.updateCar = function (car) {
        return this.http.put(this.url + '/' + car.id, car);
    };
    CarsService.prototype.deleteCar = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    CarsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], CarsService);
    return CarsService;
}());
export { CarsService };
//# sourceMappingURL=carservice.js.map