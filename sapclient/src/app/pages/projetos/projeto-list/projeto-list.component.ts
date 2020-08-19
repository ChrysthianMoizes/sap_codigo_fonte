import { Component, OnInit } from '@angular/core';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { finalize } from 'rxjs/operators';

import { ProjetoService } from '../../../services/projeto.service';

@Component({
export class ProjetoListComponent implements OnInit {

  titulo: string = 'Lista de projetos';
  @BlockUI() blockUI: NgBlockUI;
  listaProjetos$: Observable<any>;
  listaProjetos: any = [];
  colunas: any = [
    { header: 'Nome' },
    { header: 'Cliente' },
    { header: 'Lider' },
    { header: 'Testador' },
    { header: 'Revisor' },
    { header: 'Gerente' },
    { header: 'Ações' },
  ];
  constructor(
    private projetoService: ProjetoService
  ) { }

  ngOnInit(): void {
    this.obterTodos();
  }

  obterTodos() {
    this.blockUI.start();
    this.listaProjetos$ = this.projetoService.obterTodos().pipe(
      finalize(() => this.blockUI.stop())
    )
  }

  deletar(id: number) {
    this.blockUI.start();
    this.projetoService.deletar(id).pipe(
      finalize(() => this.blockUI.stop())
    ).subscribe(
      () => this.obterTodos()
    );
  }

}
