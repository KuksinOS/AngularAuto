import { Car } from "./car";

export class OwnerCar {

    constructor(
        public id?: number,
        public name?: string,
        public age?: number,
        public cars?: Car[]

    ) { }

}