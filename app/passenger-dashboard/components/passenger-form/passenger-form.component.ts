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
                {{ form.value | json }}

            <div>
            Passenger Id:
            <input
                type="number"
                name="id"
                [ngModel]="detail?.id"
            >    
            </div>
        </form>
    `
}) 

export class PassengerFormComponent {
    @Input()
    detail: Passenger;
} 
    