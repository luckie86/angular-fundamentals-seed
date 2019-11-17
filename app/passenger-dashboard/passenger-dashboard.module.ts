import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// container
import { PassengerDashobardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
// components
import { PassengerCountComponent } from '../passenger-dashboard/components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from '../passenger-dashboard/components/passenger-detail/passenger-detail.component';

// Why are we declarating and exporting ??
@NgModule ({
    declarations: [
        PassengerDashobardComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
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
