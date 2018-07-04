import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../_models/car';

@Injectable()
export class CarsService {

    private url = "/api/Cars";
    private urlcarsbyowner = "/api/Cars/CarsByOwner";
    private urlcarsbynoowner = "/api/Cars/CarsByNoOwner";

    constructor(private http: HttpClient) {
    }

    getCars() {
        return this.http.get(this.url);
    }

    getCarByOwner(id: number) {
        return this.http.get(this.urlcarsbyowner + '/' + id);
    }

    getCarsByNoOwner() {
        return this.http.get(this.urlcarsbynoowner);
    }

    createCar(car: Car) {
        return this.http.post(this.url, car);
    }
    updateCar(car: Car) {

        return this.http.put(this.url + '/' + car.id, car);
    }
    deleteCar(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}