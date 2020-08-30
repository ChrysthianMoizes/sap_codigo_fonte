import { StatusService } from './../../services/status.service';
import { ClienteService } from './../../services/cliente.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { LiderService } from './../../services/lider.service';
import { SprintService } from './../../services/sprint.service';

import { ProjetoService } from './../../services/projeto.service';
import { OrdemServicoService } from './../../services/ordem-servico.service';
import { SituacaoService } from './../../services/situacao.service';
import { Observable } from 'rxjs';

import { finalize, map, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SelectItem } from 'primeng';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('600ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})



export class DashboardComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  titulo: string = 'Dashboard'
  listaOrdemServico$: Observable<any>;
  listaOrdemServico: any = [];
  listaProjeto$: Observable<any>;
  listaProjeto: any = [];
  listaOsProjeto: SelectItem[] = [];
  situacoes: any = [];
  projetos: any = [];
  sprints: any = [];
  sprintsFiltradas: any = [];
  lideres: any = [];
  status: any = [];
  testeExibe: boolean;

  lista: any = [];
  listaFiltrada: any = [];
  listaLideres: SelectItem[] = [];
  listaProjetos: SelectItem[] = [];
  filtroLider: any = [];
  filtroCliente: any = [];
  filtroProjeto: any = [];
  filtroOs: any = [];


  colunas: any[] = [
    { header: 'OS' },
    { header: 'Status da OS' },
    { header: 'Próxima Entrega' },
    { header: 'Prazo' },
    { header: 'PF' },
    { header: 'Fábrica(s)' },
  ];

  colunaSprint: any[] = [
    { header: 'Sprint' },
    { header: 'Início' },
    { header: 'Término' },
    { header: 'PF' },
    { header: 'Impedimento?' },
    { header: 'No Prazo?' },
    { header: 'Status' },
  ];

  teste = [
    { nome: 'site', status: 'Em andamento', proxEntrega: '10-10-20', prazo: 'não', pf: '50', fabrica: 'SRC' },
    { nome: 'site', status: 'Em andamento', proxEntrega: '10-10-20', prazo: 'não', pf: '50', fabrica: 'SRC' }
  ];

  testeSprint = [
    { nome: 'dados', inicio: '10-10-20', termino: '15-10-20', pf: '20', impedimento: 'não', prazo: 'Sim', status: 'em andamento' }
  ]

  constructor(
    private ordemServicoService: OrdemServicoService,
    private projetoService: ProjetoService,
    private situacaoService: SituacaoService,
    private liderService: LiderService,
    private sprintService: SprintService,
    private clienteService: ClienteService,
    private statusService: StatusService
  ) { }

  ngOnInit(): void {

    this.obterSituacoes();
    this.obterProjetos();
    this.obterTodos();
    this.obterSprint();
    this.obterLideres();
    this.obterStatus();
  }

  obterTodos() {
    // this.blockUI.start();
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

  obterProjetos() {
    this.blockUI.start();
    this.projetoService.obterTodos().pipe(
      finalize(() => this.blockUI.stop())
    ).subscribe(
      projetos => {
        this.projetos = projetos
      }
    );
  }

  obterOrdemServico() {
    this.blockUI.start();
    this.ordemServicoService.obterTodos().pipe(
      finalize(() => this.blockUI.stop())
    ).subscribe(
      ordemServico => this.listaOrdemServico = ordemServico
    );
  }


  obterSprint() {
    this.blockUI.start();
    this.sprintService.obterTodos().pipe(
      finalize(() => this.blockUI.stop())
    ).subscribe(
      sprints => this.sprints = sprints
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

  obterSituacoes() {
    this.blockUI.start();
    this.situacaoService.obterTodos().pipe(
      finalize(() => this.blockUI.stop())
    ).subscribe(
      situacoes => this.situacoes = situacoes
    );

  }
  obterStatus() {
    this.blockUI.start();
    this.statusService.obterTodos().pipe(
      finalize(() => this.blockUI.stop())
    ).subscribe(
      status => this.status = status
    );

  }

  obterOsPorProjeto(id) {
    this.blockUI.start();
    this.ordemServicoService.obterPorIdProjeto(id)
      .pipe(
        finalize(() => this.blockUI.stop()),
        tap(console.log)
      ).subscribe(osProjeto => this.listaOsProjeto = osProjeto)
  }

  obterFiltroProjetos(id) {
    this.blockUI.start();
    forkJoin(
      this.ordemServicoService.obterPorIdProjeto(id)
    ).pipe(
        finalize(() => this.blockUI.stop()),
        map(this.mapearOsProjeto)
    ).subscribe(res => {
        this.lista = res;
        this.listaFiltrada = this.lista;
        this.listaProjetos = res.map(item => {
          return {
              label: item.nome,
              value: item.id
          }
      });
    })
  }

  preencherFiltros() {
    this.listaFiltrada = this.lista.filter(item => {
        if (!this.filtroOs.length && !this.filtroLider.length && !this.filtroProjeto.length) {
            return true;
        }
        return (this.filtroLider && this.filtroLider.some(sel => sel == item.idLider)) ||
            (this.filtroOs && this.filtroOs.some(sel => sel == item.idOrdemServico)) ||
            (this.filtroProjeto && this.filtroProjeto.some(sel => sel == item.id));
    });

  }

  obterNomeStatus(id: number) {
    return this.status.find(status => status.id == id).descricao
  }

  obterNomeLider(id: number) {
    return this.lideres.find(lider => lider.id == id).nome
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

  private mapearOsProjeto(array) {
    return array[0].map(os => {
      os.nome = array[1].find(projeto => projeto.id === os.idOrdemServico).nome + ' - ' + os.nome;
    })
  }

  private mapearLiderProjeto(array) {
    return array[0].map(lider => {
      lider.nome = array[1].find(projeto => projeto.id === lider.idLider).nome;
    })
  }
  obterCliente(id: number) {
    return this.projetos.find(projeto => projeto.id == id).idCliente
  }

  obterSprints(id: number) {
    this.sprintsFiltradas = this.sprints.find(sprints => sprints.idOrdemServico == id);
  }
  obterBoolean(ar: boolean) {
    if (ar == true) {
      return "Sim"
    } else {
      return "Não"
    }
  }

}
