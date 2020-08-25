import { ClienteService } from './../../services/cliente.service';
import { LiderService } from './../../services/lider.service';
import { SprintService } from './../../services/sprint.service';

import { ProjetoService } from './../../services/projeto.service';
import { OrdemServicoService } from './../../services/ordem-servico.service';
import { SituacaoService } from './../../services/situacao.service';

import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  titulo: string = 'Dashboard'
  listaOrdemServico$: Observable<any>;
  listaOrdemServico: any = [];
  situacoes: any = [];
  projetos: any = [];
  sprints: any = [];
  lideres: any = [];
  clientes: any = [];

  dashboard = [
    { os: 'site2', status: 'Em andamento', pf: '20', proxEntrega: '20/05', prazo: 'não', defeitoCliente: '1', defeitoInterno: '10', impedimento: 'não', revisor: 'Diego', testador: 'Ana', gerente: 'Chrys' },
    { os: 'site', status: 'Pausado', pf: '20', proxEntrega: '20/05', prazo: 'não', defeitoCliente: '1', defeitoInterno: '10', impedimento: 'não', revisor: 'Diego', testador: 'Ana', gerente: 'Chrys' },
    { os: 'site3', status: 'Pausado', pf: '20', proxEntrega: '20/05', prazo: 'não', defeitoCliente: '1', defeitoInterno: '10', impedimento: 'não', revisor: 'Diego', testador: 'Ana', gerente: 'Chrys' },
    { os: 'site4', status: 'Pausado', pf: '20', proxEntrega: '20/05', prazo: 'não', defeitoCliente: '1', defeitoInterno: '10', impedimento: 'não', revisor: 'Diego', testador: 'Ana', gerente: 'Chrys' },
    { os: 'site5', status: 'Pausado', pf: '20', proxEntrega: '20/05', prazo: 'não', defeitoCliente: '1', defeitoInterno: '10', impedimento: 'não', revisor: 'Diego', testador: 'Ana', gerente: 'Chrys' }
  ]

  colunas: any[] = [
    { header: 'OS' },
    { header: 'Status da OS' },
    { header: 'PF em execução' },
    { header: 'Próxima Entrega' },
    { header: 'A OS/Sprint está no prazo?' },
    { header: 'Defeito do Cliente' },
    { header: 'Defeito interno' },
    { header: 'Impedimento' },
    { header: 'Revisor de Código' },
    { header: 'Gerente' },
    { header: 'Testador' },
    { header: 'Ações' },
  ];

  constructor(
    private ordemServicoService: OrdemServicoService,
    private projetoService: ProjetoService,
    private situacaoService: SituacaoService,
    private liderService: LiderService,
    private sprintService: SprintService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.obterSituacoes();
    this.obterProjetos();
    this.obterTodos();
    this.obterSprint();
    this.obterLideres();
    this.obterClientes();


   
  }

  obterTodos() {
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

  obterProjetos() {
    this.blockUI.start();
    this.projetoService.obterTodos().pipe(
      finalize(() => this.blockUI.stop())
    ).subscribe(
      projetos => this.projetos = projetos
    );
  }


  obterLideres() {
    this.blockUI.start();
    this.liderService.obterTodos().pipe(
      finalize(() => this.blockUI.stop())
    ).subscribe(
      lideres => this.lideres = lideres
    );
  }

  obterNomeLider(id: number) {
    return this.lideres.find(lider => lider.id == id).nome
  }

  obterSprint() {
    this.blockUI.start();
    this.sprintService.obterTodos().pipe(
      finalize(() => this.blockUI.stop())
    ).subscribe(
      sprints => this.sprints = sprints
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
  obterClientes() {
    this.blockUI.start();
    this.clienteService.obterTodos().pipe(
      finalize(() => this.blockUI.stop())
    ).subscribe(
      clientes => this.clientes = clientes
    );
  }

  obterSituacaoSprint(id: number) {
    return this.sprints.find(sprint => sprint.idOrdemServico == id).prazo
  }

  obterImpedimentoSprint(id: number) {
    return this.sprints.find(sprint => sprint.idOrdemServico == id).impedimento
  }

  obterNomeSituacao(id: number) {
    return this.situacoes.find(situacao => situacao.id == id).descricao
  }

  obterNomeProjeto(id: number) {
    return this.projetos.find(projeto => projeto.id == id).nome
  }

  obterNomeGerente(id: number) {
    return this.projetos.find(projeto => projeto.id == id).gerente
  }

  obterNomeTestador(id: number) {
    return this.projetos.find(projeto => projeto.id == id).testador
  }

  obterNomeRevisor(id: number) {
    return this.projetos.find(projeto => projeto.id == id).revisor
  }

  obterCliente(id: number) {
    return this.projetos.find(projeto => projeto.id== id).idCliente
  }


}
