import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

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
            <div *ngIf="editing">
                <input 
                    type="text"
                    [value]="detail.fullname"
                    (input)="onNameChange(name.value)"
                    #name
                >
            </div>
            <div *ngIf="!editinig">
                {{ detail.fullname }}
            </div>
            <div class="date">
                Check in date: 
                {{ detail.checkInDate ? (detail.checkInDate | date: 'd.MMMM y' | uppercase) : 'Not Checked In'}}
            </div>
            <button
                (click)="toggleEdit()"    
            >
                {{ editing ? 'Done' : 'Edit'}}
            </button>
            <button
                (click)="onRemove()"    
            >
                Remove
            </button>
            <button
                (click)="goToPassenger()"    
            >
                View
            </button>
        </div>
    `
})

export class PassengerDetailComponent implements OnChanges {
    
    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter();
   
    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter();
    editing: boolean = false;

    @Output()
    view: EventEmitter<Passenger> = new EventEmitter();
    
    constructor () {}

    ngOnChanges (changes) {
        if(changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue, );
        }
    }

    onNameChange (value: string): void {
        this.detail.fullname = value;
    }

    toggleEdit () {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }


    onRemove () {
        this.remove.emit(this.detail);
    }

    goToPassenger () {
        this.view.emit(this.detail);
    }

} 
