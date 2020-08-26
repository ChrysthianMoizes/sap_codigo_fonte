import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardDefaultComponent } from './dashboard-default/dashboard-default.component';


@NgModule({
  declarations: [DashboardDefaultComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
