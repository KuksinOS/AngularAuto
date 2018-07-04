import { Component, OnInit } from '@angular/core';
import { OwnerCarsService } from '../_services/ownercarservice';
import { OwnerCar } from '../_models/ownercar';

@Component({
    selector: 'app-ownercars',
    templateUrl: './ownercars.component.html',
    //styleUrls: ['./ownercars.component.css'],
    providers: [OwnerCarsService]
})
export class OwnerCarsComponent implements OnInit {

    ownercar: OwnerCar = new OwnerCar();   // изменяемый товар
    ownercars: OwnerCar[];                // массив товаров
    tableMode: boolean = true;          // табличный режим

    constructor(private ownercarsService: OwnerCarsService) { }

    ngOnInit() {
        this.loadOwnerCars();    // загрузка данных при старте компонента  
    }
    // получаем данные через сервис
    loadOwnerCars() {
        this.ownercarsService.getOwnerCars()
            .subscribe((data: OwnerCar[]) => {
                this.ownercars = data
                //console.log(this.ownercars)
                return this.ownercars
            });
        
    }
    // сохранение данных
    save() {
        if (this.ownercar.id == null) {
            this.ownercarsService.createOwnerCar(this.ownercar)
                .subscribe((data: OwnerCar) => this.ownercars.push(data));
        } else {
            this.ownercarsService.updateOwnerCar(this.ownercar)
                .subscribe(data => this.loadOwnerCars());
        }
        this.cancel();
    }
    editOwnerCar(oc: OwnerCar) {
        this.ownercar = oc;
    }
    cancel() {
        this.ownercar = new OwnerCar();
        this.tableMode = true;
    }
    delete(oc: OwnerCar) {
        this.ownercarsService.deleteOwnerCar(oc.id)
            .subscribe(data => this.loadOwnerCars());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}