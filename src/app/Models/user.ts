import { Reservation } from './reservation';
export class User {
    constructor(
        public name: string = "",
        public lastName: string = "",
        public email: string = "",
        public password: string = "",
        public reservations: Reservation[]
    ) { }
}