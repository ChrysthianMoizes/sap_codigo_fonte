import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintsRoutingModule } from './sprints-routing.module';
import { SprintFormComponent } from './sprint-form/sprint-form.component';


@NgModule({
  declarations: [SprintFormComponent],
  imports: [
    CommonModule,
    SprintsRoutingModule
  ]
})
export class SprintsModule { }
