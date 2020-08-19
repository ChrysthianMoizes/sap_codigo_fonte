import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiderFormComponent } from './lider-form/lider-form.component';
import { LiderListComponent } from './lider-list/lider-list.component'

const routes: Routes = [
    { path: '', component: LiderListComponent },
    { path: 'novo', component: LiderFormComponent },
    { path: ':id', component: LiderFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LideresRoutingModule { }
