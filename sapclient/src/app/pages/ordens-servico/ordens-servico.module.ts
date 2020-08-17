import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdensServicoRoutingModule } from './ordens-servico-routing.module';
import { OsListComponent } from './os-list/os-list.component';
import { OsFormComponent } from './os-form/os-form.component';


@NgModule({
  declarations: [OsListComponent, OsFormComponent],
  imports: [
    CommonModule,
    OrdensServicoRoutingModule
  ]
})
export class OrdensServicoModule { }
