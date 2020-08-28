import { SituacaoService } from './../../../services/situacao.service';
import { ProjetoService } from './../../../services/projeto.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { OrdemServicoService } from './../../../services/ordem-servico.service';

import { finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-os-list',
  templateUrl: './os-list.component.html',
  styleUrls: ['./os-list.component.css']
})
export class OsListComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  titulo: string = 'Lista de Ordens de Serviço'
  listaOrdemServico$: Observable<any>;
  listaOrdemServico: any = [];
  situacoes: any = [];
  projetos: any = [];
  status: any = [];
  display: boolean = false;
  
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
    { header: 'Ações' },

  ];

  constructor(
    private ordemServicoService: OrdemServicoService,
    private projetoService: ProjetoService,
    private situacaoService: SituacaoService
  ) { }

  ngOnInit(): void {
    this.obterSituacoes();
    this.obterProjetos();
    this.obterTodos();
  }

  obterTodos() {
    this.blockUI.start();
    this.listaOrdemServico$ = this.ordemServicoService.obterTodos().pipe(
      map(res => {
        res.forEach(item => {
          item.dataProximaEntrega = new Date(`${item.dataProximaEntrega}T00:00:00`);
          item.prazo = new Date(`${item.prazo}T00:00:00`);
        })
        return res;
      }),
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

  obterSituacoes() {
    this.blockUI.start();
    this.situacaoService.obterTodos().pipe(
      finalize(() => this.blockUI.stop())
    ).subscribe(
      situacoes => this.situacoes = situacoes
    );
  }

  obterProjetos() {
    this.blockUI.start();
    this.projetoService.obterTodos().pipe(
      finalize(() => this.blockUI.stop())
    ).subscribe(
      projetos => this.projetos = projetos
    );
  }


  obterNomeSituacao(id: number) {
    return this.situacoes.find(situacao => situacao.id == id).descricao
  }

  obterNomeProjeto(id: number) {
    return this.projetos.find(projeto => projeto.id == id).nome
  }

  showDialog() {
    this.display = true;
  }

}
