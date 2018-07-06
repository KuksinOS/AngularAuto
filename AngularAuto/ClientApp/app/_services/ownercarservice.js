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
import { HttpClient, HttpHeaders } from '@angular/common/http';
var OwnerCarsService = /** @class */ (function () {
    function OwnerCarsService(http) {
        this.http = http;
        this.url = "/api/OwnerCars";
        this.urlupdatecarsbyowner = "/api/OwnerCars/UpdateCars";
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    OwnerCarsService.prototype.getOwnerCars = function () {
        return this.http.get(this.url);
    };
    OwnerCarsService.prototype.getOwnerCar = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    OwnerCarsService.prototype.createOwnerCar = function (ownercar) {
        return this.http.post(this.url, ownercar);
    };
    OwnerCarsService.prototype.updateOwnerCar = function (ownercar) {
        return this.http.put(this.url + '/' + ownercar.id, ownercar);
    };
    OwnerCarsService.prototype.updateUpdateCarsByOwner = function (id, cars) {
        //console.log(cars);
        return this.http.put(this.urlupdatecarsbyowner + '/' + id, cars, this.httpOptions).subscribe(); //c => console.log(c));
    };
    OwnerCarsService.prototype.deleteOwnerCar = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    OwnerCarsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], OwnerCarsService);
    return OwnerCarsService;
}());
export { OwnerCarsService };
//# sourceMappingURL=ownercarservice.js.map