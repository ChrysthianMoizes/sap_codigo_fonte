import { SituacaoService } from './../../../services/situacao.service';
import { ProjetoService } from './../../../services/projeto.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { OrdemServicoService } from './../../../services/ordem-servico.service';

import { finalize, map } from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';

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
  msgs: Message[] = [];
  
  colunas: any = [
    { header: 'Nome' },
    { header: 'Próxima Entrega' },
    { header: 'Prazo' },
    { header: 'Defeitos do Cliente' },
    { header: 'Defeitos Internos' },
    { header: 'Pontos de Função' },
    { header: 'Fábrica' },
    { header: 'Projeto' },
    { header: 'Situação' },
    { header: 'Ações' },

  ];

  constructor(
    private ordemServicoService: OrdemServicoService,
    private projetoService: ProjetoService,
    private situacaoService: SituacaoService,
    private confirmationService: ConfirmationService
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
  confirm2(id) {
    this.confirmationService.confirm({
        message: 'Você deseja excluir a ordem de serviço?',
        header: 'Confirmação de exclusão',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'Ordem de serviço excluída'}];
            this.deletar(id);
        },
        reject: () => {

        },
        key:"confirm"
    });
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
