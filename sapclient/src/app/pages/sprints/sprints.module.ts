import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { SprintsRoutingModule } from './sprints-routing.module';
import { SprintFormComponent } from './sprint-form/sprint-form.component';

@NgModule({
  declarations: [SprintFormComponent],
  imports: [
    SharedModule,
    SprintsRoutingModule
  ]
})
export class SprintsModule { }
