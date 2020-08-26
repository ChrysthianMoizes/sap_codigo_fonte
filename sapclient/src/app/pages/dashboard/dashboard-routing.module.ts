import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardDefaultComponent } from './dashboard-default/dashboard-default.component';

const routes: Routes = [
    { path: '', component: DashboardDefaultComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
