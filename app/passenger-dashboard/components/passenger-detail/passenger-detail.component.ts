import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.inteface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <span 
                class="status"
                [class.checked-in]="detail.checkedIn"
            >
            </span>
                {{ detail.fullname }}
            <div class="date">
                Check in date: 
                {{ detail.checkInDate ? (detail.checkInDate | date: 'd.MMMM y' | uppercase) : 'Not Checked In'}}
            </div>
            <!-- safe navigation operator -->
            <div class="childern">
                Children: {{ detail.children?.length || 0}}
            </div>
        </div>
    `
})

export class PassengerDetailComponent {
    @Input()
    detail: Passenger;
    constructor () {}
} 
