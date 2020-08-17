import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LideresRoutingModule } from './lideres-routing.module';
import { LiderListComponent } from './lider-list/lider-list.component';
import { LiderFormComponent } from './lider-form/lider-form.component';


@NgModule({
  declarations: [LiderListComponent, LiderFormComponent],
  imports: [
    CommonModule,
    LideresRoutingModule
  ]
})
export class LideresModule { }
