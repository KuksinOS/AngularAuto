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
import { OwnerCarsService } from '../_services/ownercarservice';
import { OwnerCar } from '../_models/ownercar';
var OwnerCarsComponent = /** @class */ (function () {
    function OwnerCarsComponent(ownercarsService) {
        this.ownercarsService = ownercarsService;
        this.ownercar = new OwnerCar(); // изменяемый товар
        this.tableMode = true; // табличный режим
    }
    OwnerCarsComponent.prototype.ngOnInit = function () {
        this.loadOwnerCars(); // загрузка данных при старте компонента  
    };
    // получаем данные через сервис
    OwnerCarsComponent.prototype.loadOwnerCars = function () {
        var _this = this;
        this.ownercarsService.getOwnerCars()
            .subscribe(function (data) {
            _this.ownercars = data;
            //console.log(this.ownercars)
            return _this.ownercars;
        });
    };
    // сохранение данных
    OwnerCarsComponent.prototype.save = function () {
        var _this = this;
        if (this.ownercar.id == null) {
            this.ownercarsService.createOwnerCar(this.ownercar)
                .subscribe(function (data) { return _this.ownercars.push(data); });
        }
        else {
            this.ownercarsService.updateOwnerCar(this.ownercar)
                .subscribe(function (data) { return _this.loadOwnerCars(); });
        }
        this.cancel();
    };
    OwnerCarsComponent.prototype.editOwnerCar = function (oc) {
        this.ownercar = oc;
    };
    OwnerCarsComponent.prototype.cancel = function () {
        this.ownercar = new OwnerCar();
        this.tableMode = true;
    };
    OwnerCarsComponent.prototype.delete = function (oc) {
        var _this = this;
        this.ownercarsService.deleteOwnerCar(oc.id)
            .subscribe(function (data) { return _this.loadOwnerCars(); });
    };
    OwnerCarsComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    OwnerCarsComponent = __decorate([
        Component({
            selector: 'app-ownercars',
            templateUrl: './ownercars.component.html',
            //styleUrls: ['./ownercars.component.css'],
            providers: [OwnerCarsService]
        }),
        __metadata("design:paramtypes", [OwnerCarsService])
    ], OwnerCarsComponent);
    return OwnerCarsComponent;
}());
export { OwnerCarsComponent };
//# sourceMappingURL=ownercars.component.js.map