import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Passenger } from '../passenger-dashboard/models/passenger.inteface';


const PASSENGER_API: string = '/api/passengers'

@Injectable()
export class PassengerDashboardService {
    constructor (private http: Http) {
        console.log(this.http);
    }

    getPassengers (): Promise<Passenger[]> {
        return this.http
            .get(PASSENGER_API)
            .toPromise()
            .then((response: Response) => response.json());
    }

    updatePassenger (passenger: Passenger): Promise<Passenger> {
        let headers = new Headers({
            'Content-Type': 'appication-json'
        });
        let options = new RequestOptions({
            headers: headers
        })
        return this.http
            .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
            .toPromise()
            .then((response: Response) => response.json());
    }

    removePassenger (passenger: Passenger): Promise<Passenger> {
        return this.http
            .delete(`${PASSENGER_API}/${passenger.id}`, passenger)
            .toPromise()
            .then((response: Response) => response.json());
    }

}
