import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiarioErrosComponent } from './components/diario-erros/diario-erros.component';
import { LoginSuccessComponent } from '@nuvem/angular-base';

const routes: Routes = [
    { path: 'diario-erros', component: DiarioErrosComponent, data: { breadcrumb: 'Diário de Erros'} },
    { path: 'login-success', component: LoginSuccessComponent },

    { path: 'lideres', loadChildren: './pages/lideres/lideres.module#LideresModule'},
    { path: 'ordens-servico', loadChildren: './pages/ordens-servico/ordens-servico.module#OrdensServicoModule'},
    { path: 'projeto', loadChildren: './pages/projetos/projetos-routing.module#ProjetosModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
