import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OsListComponent } from './os-list/os-list.component';
import { OsFormComponent } from './os-form/os-form.component';

const routes: Routes = [
    {
        path: '',
        component: OsListComponent
    },
    {
        path: 'novo',
        component: OsFormComponent
    },
    { path: ':id', component: OsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdensServicoRoutingModule { }
