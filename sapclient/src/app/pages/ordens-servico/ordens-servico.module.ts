import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { OrdensServicoRoutingModule } from './ordens-servico-routing.module';
import { OsListComponent } from './os-list/os-list.component';
import { OsFormComponent } from './os-form/os-form.component';
import {DropdownModule} from 'primeng/dropdown';



@NgModule({
  declarations: [OsListComponent, OsFormComponent],
  imports: [
    SharedModule,
    OrdensServicoRoutingModule,
    DropdownModule
  ]
})
export class OrdensServicoModule { }
