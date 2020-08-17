import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';
import { OrdensServicoRoutingModule } from './ordens-servico-routing.module';
import { OsFormComponent } from './os-form/os-form.component';
import { OsListComponent } from './os-list/os-list.component';

const routes: Routes = [];

@NgModule({
  declarations: [OsFormComponent, OsListComponent],
  imports: [
    SharedModule,
    OrdensServicoRoutingModule
  ]
})
export class OrdensServicoModule { }
