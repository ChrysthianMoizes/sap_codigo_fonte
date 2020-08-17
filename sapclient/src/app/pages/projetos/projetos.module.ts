import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetoListComponent } from './projeto-list/projeto-list.component';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';


@NgModule({
  declarations: [ProjetoListComponent, ProjetoFormComponent],
  imports: [
    SharedModule,
    ProjetosRoutingModule
  ]
})
export class ProjetosModule { }
