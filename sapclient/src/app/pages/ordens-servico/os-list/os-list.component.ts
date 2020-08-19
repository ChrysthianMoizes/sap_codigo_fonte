import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { finalize } from 'rxjs/operators';

import{OrdemServico} from './../../../models/ordem-servico.model';
import { OrdemServicoService} from './../../../services/ordem-servico.service';

@Component({
  selector: 'app-os-list',
  templateUrl: './os-list.component.html',
  styleUrls: ['./os-list.component.css']
})
export class OsListComponent implements OnInit {

  titulo: string = 'Lista de Ordens de Serviço';
  @BlockUI() blockUI: NgBlockUI;
  listarOS$: Observable<any>;
  listarOS: any = [];
  colunas: any = [
      { header: 'Nome' },
      { header: 'Contato(s)' },
      { header: 'Ações' },
  ];

constructor(
    private ordemServicoService:OrdemServicoService, 
) { }

ngOnInit(): void {
    this.obterTodos();
}

obterTodos() {
  this.blockUI.start();
  this.listarOS$ = this.ordemServicoService.obterTodos().pipe(
      finalize(() => this.blockUI.stop())
  )
}

deletar(id: number) {
  this.blockUI.start();
  this.ordemServicoService.deletar(id).pipe(
      finalize(() => this.blockUI.stop())
  ).subscribe(
      () => this.obterTodos()
  );
}

}
