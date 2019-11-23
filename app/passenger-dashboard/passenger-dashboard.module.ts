import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// container
import { PassengerDashobardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// components
import { PassengerCountComponent } from '../passenger-dashboard/components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from '../passenger-dashboard/components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from '../passenger-dashboard/components/passenger-form/passenger-form.component';

// service
import { PassengerDashboardService } from '../passenger-dashboard/passenger-dashboard.service';

// Why are we declarating and exporting ??
const routes: Routes = [
    { path: 'passengers', component: PassengerDashobardComponent }
];
@NgModule ({
    declarations: [
        PassengerDashobardComponent,
        PassengerViewerComponent,
        // components
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerFormComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes),
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
