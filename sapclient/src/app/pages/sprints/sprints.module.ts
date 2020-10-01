import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { SprintsRoutingModule } from './sprints-routing.module';
import { SprintFormComponent } from './sprint-form/sprint-form.component';
import { SprintListComponent } from './sprint-list/sprint-list.component';

@NgModule({
  declarations: [SprintFormComponent, SprintListComponent],
  imports: [
    SharedModule,
    SprintsRoutingModule
  ],
  exports: [
    SprintFormComponent,
    SprintListComponent
  ]
})
export class SprintsModule { }
