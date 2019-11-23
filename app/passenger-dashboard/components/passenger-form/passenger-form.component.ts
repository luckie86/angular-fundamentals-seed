import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.inteface';
import { Baggage } from '../../models/baggage.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <form #form="ngForm" novalidate>
            <div>
                Passenger Name:
                <input
                    type="text"
                    name="fullname"
                    required
                    #fullname="ngModel"
                    [ngModel]="detail?.fullname"
                >
                <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
                    Passenger name is required
                </div> 
            </div>
            <div>
                Passenger Id:
                <input
                    type="number"
                    name="id"
                    required
                    #id="ngModel"
                    [ngModel]="detail?.id"
                >
                <div *ngIf="id.errors?.required && id.dirty" class="error">
                    Passenger Id is required
                </div>   
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
                
            </div>

            <div *ngIf="form.value.checkedIn">
                Check in date:
                <input
                    type="number"
                    name="checkInDate"
                    [ngModel]="detail?.checkInDate"
                >
            </div>

            <div>
                Luggage:
                <select
                    name="baggage"
                    [ngModel]="detail?.baggage"
                >
                    <option
                        *ngFor="let item of baggage"
                        [value]="item.key"
                        [selected]="item.key === detail?.baggage"
                    >
                        {{item.value}}
                    </option>
                </select>
            </div>
            
            <button 
                type="submit"
                [disabled]="form.invalid"    
            >
                Update Passenger
            </button>
        </form>
    `
}) 

export class PassengerFormComponent {
    @Input()
    detail: Passenger;

    baggage: Baggage[] = [{
        key: 'none',
        value: 'No Baggage'
    },{
        key: 'hand-only',
        value: 'Hand Baggage'
    },{
        key: 'hold-only',
        value: 'Hold Baggage'
    },{
        key: 'hand-hold',
        value: 'Hand and Hold Baggage'
    }
];

    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn) {
            this.detail.checkInDate = Date.now();
        }
    }

} 
    