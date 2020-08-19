import { Projeto } from './../../../models/projeto.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { finalize } from 'rxjs/operators';
import { OrdemServicoService } from 'src/app/services/ordem-servico.service';

@Component({
  selector: 'app-os-list',
  templateUrl: './os-list.component.html',
  styleUrls: ['./os-list.component.css']
})
export class OsListComponent implements OnInit {

  titulo: string = 'Lista de Ordens de Serviço'
  @BlockUI() blockUI: NgBlockUI;
  listaOrdemServico$: Observable<any>;
  listaOrdemServico:any = [];
  colunas: any = [
      { header: 'Nome' },
      { header: 'Data Próxima Entrega' },
      { header: 'Prazo' },
      { header: 'Qtd Defeitos Cliente' },
      { header: 'Qtd Defeitos Interno' },
      { header: 'Pontos Função' },
      { header: 'Fábrica' },
      { header: 'Projeto' },
      { header: 'Situação' },
      { header: 'Sprints' },
      { header: 'Ações' },
      
  ];

  situacoes = [
    {id: 1, descricao: 'em codificação'},
    {id: 2, descricao: 'em a/p'},
    {id: 3, descricao: 'finalizado'},
    {id: 4, descricao: 'aguardando'},

  ];

  obterNomeSituacao(id: number) {
    return this.situacoes.find(situacao => situacao.id == id).descricao
  }

  projetos = [
    {id:1, nome: 'SGVM'},
    {id:2, nome: 'GP3'},
  ];

  obterNomeProjeto(id: number){
    return this.projetos.find(projeto => projeto.id == id).nome
  }

  constructor(
    private ordemServicoService: OrdemServicoService
  ) { }

  ngOnInit(): void {
    this.obterTodos();
  }

  obterTodos(){
    this.blockUI.start();
    this.listaOrdemServico$ = this.ordemServicoService.obterTodos().pipe(
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
