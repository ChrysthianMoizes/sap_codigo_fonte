import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { SprintsModule } from './../sprints/sprints.module';

import { OrdensServicoRoutingModule } from './ordens-servico-routing.module';
import { OsListComponent } from './os-list/os-list.component';
import { OsFormComponent } from './os-form/os-form.component';

import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [OsListComponent, OsFormComponent],
  imports: [
    SharedModule,
    SprintsModule,
    OrdensServicoRoutingModule,
    DropdownModule,
    DialogModule
  ]
})
export class OrdensServicoModule { }
