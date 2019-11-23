import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.inteface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <form #form="ngForm" novalidate>
            {{ detail | json }}
            <div>
                Passenger Name:
                <input
                    type="text"
                    name="fullname"
                    [ngModel]="detail?.fullname">    
            </div>
            <div>
                Passenger Id:
                <input
                    type="number"
                    name="id"
                    [ngModel]="detail?.id"
                >    
            </div>
                <label>
                    <input
                        type="checkbox"
                        name="checkedIn"
                        [ngModel]="detail?.checkedIn"
                        (ngModelChange)="toggleCheckIn($event)"
                    >
                </label>
            <div>
                {{ form.value | json }}
            </div>

            <div *ngIf="form.value.checkedIn">
                Check in date:
                <input
                    type="number"
                    name="checkInDate"
                    [ngModel]="detail?.checkInDate"
                >
            </div>

        </form>
    `
}) 

export class PassengerFormComponent {
    @Input()
    detail: Passenger;

    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn) {
            this.detail.checkInDate = Date.now();
        }
    }

} 
    