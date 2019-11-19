import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.inteface'

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <passenger-count 
                [items]="passengers">
            </passenger-count>
            <div *ngFor="let passenger of passengers;">
                {{ passenger.fullname }}
            </div>
            <passenger-detail
                *ngFor="let passenger of passengers;"
                [detail]="passenger"
                (edit)="handleEdit($event)"
                (remove)="handleRemove($event)">
            </passenger-detail>
        </div>
    `
})

export class PassengerDashobardComponent implements OnInit {
    passengers: Passenger[];
    constructor (private passengerService: PassengerDashboardService) {}
    ngOnInit() {
        console.log("ngOnInit");
        this.passengers = this.passengerService.getPassengers()
    }

    handleEdit (event: Passenger) {
        this.passengers = this.passengers.map((passenger: Passenger) => {
            if (passenger.id === event.id) {
                passenger = Object.assign({}, passenger, event);
            }
            return passenger
        });
    }

    handleRemove (event: Passenger) {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
            return passenger.id !== event.id
        })
    }

}
