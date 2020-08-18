import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';


import { Routes, RouterModule } from '@angular/router';
import { SprintFormComponent } from './sprint-form/sprint-form.component';



const routes: Routes = [
{path:'novo',component:SprintFormComponent},
{path:'id',component:SprintFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SprintsRoutingModule { }
