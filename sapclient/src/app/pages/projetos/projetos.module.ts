import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetoListComponent } from './projeto-list/projeto-list.component';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';


@NgModule({
  declarations: [ProjetoListComponent, ProjetoFormComponent],
  imports: [
    CommonModule,
    ProjetosRoutingModule
  ]
})
export class ProjetosModule { }
