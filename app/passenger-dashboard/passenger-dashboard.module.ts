import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashobardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

@NgModule ({
    declarations: [
        PassengerDashobardComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        PassengerDashobardComponent,
    ],
})

export class PassengerDashboardModule {
    
}
