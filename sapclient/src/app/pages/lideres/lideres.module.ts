import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';

import { LideresRoutingModule } from './lideres-routing.module';
import { LiderListComponent } from './lider-list/lider-list.component';
import { LiderFormComponent } from './lider-form/lider-form.component';


@NgModule({
  declarations: [LiderListComponent, LiderFormComponent],
  imports: [
    SharedModule,
    LideresRoutingModule
  ]
})
export class LideresModule { }
