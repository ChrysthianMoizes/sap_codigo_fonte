import { trigger,state,style,transition,animate } from '@angular/animations';
import { Component, OnInit, AfterContentChecked } from '@angular/core';

import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';

import { Observable, forkJoin } from 'rxjs';
import { tap, finalize, map } from 'rxjs/operators';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { SprintService } from './../../../services/sprint.service';
import { OrdemServicoService } from './../../../services/ordem-servico.service';
import { ProjetoService } from './../../../services/projeto.service';
import { TipoSituacaoService } from './../../../services/tipo-situacao.service';
import { LiderService } from './../../../services/lider.service';
import { ClienteService } from './../../../services/cliente.service';
import { TipoStatusService } from './../../../services/tipo-status.service';

import { SituacaoEnum } from './../../../models/enums/situacao.enum.model';
import { TipoSituacao } from './../../../models/tipo-situacao.model';
import { TipoStatus } from './../../../models/tipo-status.model';
import { Projeto } from './../../../models/projeto.model';
import { OrdemServico } from './../../../models/ordem-servico.model';
import { Lider } from './../../../models/lider.model';
import { Cliente } from './../../../models/cliente.model';

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: ['./dashboard-default.component.css'],
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
export class DashboardDefaultComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;
    lista: any = [];
    listaFiltrada: any = [];
    listaLideres: SelectItem[] = [];
    listaSituacoes: SelectItem[] = [];
    listaStatus: SelectItem[] = [];
    listaProjetos: SelectItem[] = [];
    listaClientes: SelectItem[] = [];
    filtroLider: any = [];
    filtroCliente: any = [];
    filtroProjeto: any = [];


    colunas: any = [
        { header: 'Projeto' },
        { header: 'O.S em execução' },
        { header: 'Qtd. Pontos de Função' },
        { header: 'Qtd. Defeitos Cliente' },
        { header: 'Líder' },
        { header: 'Testador' },
        { header: 'Revisor' },
        { header: 'Gerente' },
    ]

    colunasOS: any = [
        { header: 'OS' },
        { header: 'Status da OS' },
        { header: 'Próxima Entrega' },
        { header: 'No prazo?' },
        { header: 'PF' },
        { header: 'Fábrica(s)' },
    ]

    colunasSprints:any = [
        { header: 'Sprint' },
        { header: 'Início' },
        { header: 'Término' },
        { header: 'PF' },
        { header: 'Impedimento?' },
        { header: 'No Prazo?' },
        { header: 'Status' },
    ];

    simNaoDropDown: any = [
        { label: 'SIM', value: true},
        { label: 'NÃO', value: false}
    ]

  constructor(
    protected sprintService: SprintService,
    protected osService: OrdemServicoService,
    protected projetosService: ProjetoService,
    protected situacaoService: TipoSituacaoService,
    protected liderService: LiderService,
    protected clienteService: ClienteService,
    protected statusService: TipoStatusService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
      this.carregarLideres();
      this.carregarClientes();
      this.carregarSituacoes();
      this.carregarStatus();
      this.obterProjetos();
  }

  obterProjetos() {
      this.blockUI.start();
      forkJoin(
          this.projetosService.obterDetalhado(),
          this.clienteService.obterTodos()
      ).pipe(
          finalize(() => this.blockUI.stop()),
          map(this.mapearClienteProjeto)
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

  carregarOsProjeto(e) {
    if (!e.data.os)
        this.obterOsPorProjeto(e.data)
  }

  carregarLideres() {
      this.blockUI.start();
      this.liderService.obterTodos().pipe(
          finalize(() => this.blockUI.stop()),
          map(this.converterDropDownLider)
      ).subscribe(lider => this.listaLideres = lider);
  }

  carregarSituacoes() {
      this.blockUI.start();
      this.situacaoService.obterTodos().pipe(
          finalize(() => this.blockUI.stop()),
          map(this.converterDropDownDominioFixo)
      ).subscribe(situacoes => this.listaSituacoes = situacoes);
  }

  carregarClientes() {
      this.blockUI.start();
      this.clienteService.obterTodos().pipe(
          finalize(() => this.blockUI.stop()),
          map(this.converterDropDownDominioFixo)
      ).subscribe(clientes => this.listaClientes = clientes);
  }

  carregarStatus() {
      this.blockUI.start();
      this.statusService.obterTodos().pipe(
          finalize(() => this.blockUI.stop()),
          map(this.converterDropDownDominioFixo)
      ).subscribe(status => this.listaStatus = status);
  }

  obterLiderNome(idLider: number): string {
      return this.listaLideres.find(lider => lider.value == idLider).label;
  }

  obterSituacao(idSituacao: number): string {
    return this.listaSituacoes.find(lider => lider.value == idSituacao).label;
  }

  obterStatus(idStatus: number): string {
    return this.listaStatus.find(lider => lider.value == idStatus).label;
  }

  obterSimNao(value): string {
      return this.simNaoDropDown.find(item => item.value == value).label;
  }

  habilitarBotao(e, projeto) {
      if (!projeto.edit)
        projeto['edit'] = true;
  }

  editarProjeto(projeto) {
      if (!this.verificarProjetoValido(projeto)) {
        this.messageService.add({
            severity: 'error',
            summary: 'Projeto possui dados inválidos'
        })
        return;
      }
      this.blockUI.start();
        this.projetosService.salvar(projeto).pipe(
            finalize(() => this.blockUI.stop())
        ).subscribe(res => projeto.edit = false);
  }

  editarOs(os) {
      if (!this.verificarOsValido(os)) {
        this.messageService.add({
            severity: 'error',
            summary: 'Ordem de serviço possui dados inválidos'
        })
        return;
      }
      this.blockUI.start();
          this.osService.salvar(os).pipe(
              finalize(() => this.blockUI.stop())
          ).subscribe(res => os.edit = false);
  }

  editarSprint(sprint) {
      if (!this.verificarSprintValido(sprint)) {
        this.messageService.add({
            severity: 'error',
            summary: 'Sprint possui dados inválidos'
        })
        return;
      }
      this.blockUI.start();
          this.sprintService.salvar(sprint).pipe(
              finalize(() => this.blockUI.stop())
          ).subscribe(res => sprint.edit = false);
  }

  preencherFiltros() {
    this.listaFiltrada = this.lista.filter(item => {
        if (!this.filtroCliente.length && !this.filtroLider.length && !this.filtroProjeto.length) {
            return true;
        }
        return (this.filtroLider && this.filtroLider.some(sel => sel == item.idLider)) ||
            (this.filtroCliente && this.filtroCliente.some(sel => sel == item.idCliente)) ||
            (this.filtroProjeto && this.filtroProjeto.some(sel => sel == item.id));
    });

  }

  private verificarProjetoValido(projeto): boolean {
      return projeto.gerente && projeto.testador && projeto.revisor;
  }

  private verificarOsValido(os): boolean {
    return os.dataProximaEntrega && os.prazo && os.pontosFuncao && os.fabrica;
  }

  private verificarSprintValido(sprint): boolean {
    return sprint.nome && sprint.dataInicio && sprint.dataTermino && sprint.pontosFuncao;
  }

  private obterOsPorProjeto(projeto: Projeto): void {
      this.blockUI.start();
      this.osService.obterPorProjeto(projeto.id).pipe(
          finalize(() => this.blockUI.stop()),
          map(this.formatarDatasOsSprints)
      ).subscribe(res => projeto['os'] = res);
  }

  private mapearClienteProjeto(array) {
      return array[0].map(projeto => {
        projeto.nome = projeto.descricao;
        projeto.descricao = array[1].find(cliente => cliente.id === projeto.idCliente).descricao + ' - ' + projeto.descricao;
        return projeto;
      });
  }

  private formatarDatasOsSprints(array) {
    array.forEach(item => {
        item.dataProximaEntrega = new Date(item.dataProximaEntrega);
        item.prazo = new Date(item.prazo);
    });

    if (array.sprints) {
        array.sprints.forEach(item => {
            item.dataInicio = new Date(item.dataInicio);
            item.dataTermino = new Date(item.dataTermino);
        })
    }

    return array;
  }

  private converterDropDownLider(lista) {
    return lista.map(item => {
        return {
            label: item['nome'].toUpperCase(),
            value: item['id']
        }
    })
  }

  private converterDropDownDominioFixo(lista) {
    return lista.map(item => {
        return {
            label: item['descricao'].toUpperCase(),
            value: item['id']
        }
    })
  }

}
