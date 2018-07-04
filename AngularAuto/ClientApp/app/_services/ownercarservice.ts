import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OwnerCar } from '../_models/ownercar';
import { Car } from '../_models/car';


@Injectable()
export class OwnerCarsService {

    private url = "/api/OwnerCars";
    private urlupdatecarsbyowner = "/api/OwnerCars/UpdateCarsByOwner";


     private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };




    constructor(private http: HttpClient) {
    }

    getOwnerCars() {
        return this.http.get(this.url);
    }

    getOwnerCar(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createOwnerCar(ownercar: OwnerCar) {
        return this.http.post(this.url, ownercar);
    }
    updateOwnerCar(ownercar: OwnerCar) {

        return this.http.put(this.url + '/' + ownercar.id, ownercar);
    }

    updateUpdateCarsByOwner(id: number, cars: Car[]) {
       // console.log(this.urlupdatecarsbyowner + '/' + id); 
        //console.log(cars); 
        //return this.http.put(this.urlupdatecarsbyowner + '/' + id, cars);
       // return this.http.put("/api/OwnerCars/UpdateCarsByOwner/1", cars);
       var car = cars[0];
        return this.http.put<Car>(this.urlupdatecarsbyowner + '/' + id, cars, this.httpOptions).subscribe(c => console.log(c));
           

    }


    deleteOwnerCar(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}