import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetoListComponent } from './projeto-list/projeto-list.component';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';

const routes: Routes = [
    { path: '', component: ProjetoListComponent },
    { path: 'novo', component: ProjetoFormComponent },
    { path: ':id', component: ProjetoFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetosRoutingModule { }
