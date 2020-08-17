import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LideresRoutingModule } from './lideres-routing.module';
import { LiderFormComponent } from './lider-form/lider-form.component';
import { LiderListComponent } from './lider-list/lider-list.component';


@NgModule({
  declarations: [LiderFormComponent, LiderListComponent],
  imports: [
    CommonModule,
    LideresRoutingModule
  ]
})
export class LideresModule { }
