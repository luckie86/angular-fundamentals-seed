import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// container
import { PassengerDashobardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// components
import { PassengerCountComponent } from '../passenger-dashboard/components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from '../passenger-dashboard/components/passenger-detail/passenger-detail.component';

// service
import { PassengerDashboardService } from '../passenger-dashboard/passenger-dashboard.service';

// Why are we declarating and exporting ??
@NgModule ({
    declarations: [
        PassengerDashobardComponent,
        PassengerViewerComponent,
        // components
        PassengerCountComponent,
        PassengerDetailComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
    ],
    exports: [
        PassengerViewerComponent,
    ],
    providers: [
        PassengerDashboardService,
    ]
})

export class PassengerDashboardModule {
    
}
