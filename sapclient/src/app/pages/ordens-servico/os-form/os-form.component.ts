
import { SprintService } from './../../../services/sprint.service';
import { StatusService } from './../../../services/status.service';
import { Sprint } from './../../../models/sprint.model';
import { SprintFormComponent } from './../../sprints/sprint-form/sprint-form.component';
import { SituacaoService } from './../../../services/situacao.service';

import { ProjetoService } from './../../../services/projeto.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize, switchMap, map, tap } from 'rxjs/operators'


import { Observable } from 'rxjs';
import { OrdemServico } from './../../../models/ordem-servico.model';
import { OrdemServicoService } from './../../../services/ordem-servico.service';
import { SelectItem, MessageService } from 'primeng';

@Component({
  selector: 'app-os-form',
  templateUrl: './os-form.component.html',
  styleUrls: ['./os-form.component.css']
})
export class OsFormComponent implements OnInit {

  titulo: string = 'Cadastro de Ordens de Serviço';
  acaoAtual: string;
  form: FormGroup;
  formSubmetido: boolean = false;
  listaProjetos: SelectItem[];
  listaStatus: any = [];
  situacoes: SelectItem[];
  status: any = [];
  sprints: Sprint[] = [];
  listaSprint$: Observable<any>;
  listaSprint: any = [];
  ordemService$: Observable<any>;

  @ViewChild('sprintDialog') sprintDialog: SprintFormComponent;

  colunas = [
    { header: 'Nome' },
    { header: 'Ínicio' },
    { header: 'Término' },
    { header: 'PF' },
    { header: 'Status' },
    { header: 'Ações' },
  ]

  dataBr = {
    firstDayOfWeek: 1,
    dayNames: ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
    monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    today: 'Hoje',
    clear: 'Limpar'
  };

  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private ordemService: OrdemServicoService,
    private projetoService: ProjetoService,
    private situacaoService: SituacaoService,
    private statusService: StatusService,
    private sprintService: SprintService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.setAcaoAtual();
    this.iniciarForm();
    this.carregarDropdownProjetos();
    this.carregarDropdownSituacao();
    this.carregarStatus();
    this.carregarOrdemServico();

  }

  private setAcaoAtual() {
    if (this.route.snapshot.url[0].path == 'novo') {
      this.titulo = 'Cadastro de Ordens de Serviço';
      return;
    }
    this.titulo = 'Editando OS';
  }

  iniciarForm() {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      dataProximaEntrega: [null
        , [
          Validators.required,
        ]
      ],
      qtdDefeitosCliente: [null],
      qtdDefeitosInterno: [null],
      pontosFuncao: [null
        , [
          Validators.required,
        ]],
      fabrica: [null
        , [
          Validators.required,
          Validators.minLength(2)
        ]],
      idProjeto: [null
        , [
          Validators.required
        ]],
      idSituacao: [null
        , [
          Validators.required
        ]],
      prazo: [null
        , [
          Validators.required
        ]],
      sprints: [null]
    });
  }

  enviarForm() {
    this.formSubmetido = true;
    if (!this.form.invalid) {
      this.form.get('sprints').setValue([])
      this.salvar();
    }
  }

  salvar() {
    this.blockUI.start();
    const recurso = Object.assign(new OrdemServico(), this.form.value);
    recurso.sprints = this.sprints;
    console.log(recurso);
    this.ordemService.salvar(recurso).pipe(
      finalize(() => {
        this.blockUI.stop()
      })
    ).subscribe(() => {
      const path: string = this.route.snapshot.parent.url[0].path;
      this.router.navigate([path]);
      this.messageService.add({ severity: 'info', summary: 'Cadastrado com sucesso' })
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Erro ao cadastrar' })
    })
  }

  obterTodos() {
    // this.blockUI.start();
    this.ordemService$ = this.ordemService.obterTodos().pipe(
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

  // Colocar um blockUI aqui
  deletar(id: number) {
    this.sprintService.deletar(id).subscribe(
          () => this.sprints = this.sprints.filter(res => res.id !== id)
      ),
      finalize(() => this.blockUI.stop());
  }


  carregarOrdemServico() {
    if (this.route.snapshot.url[0].path != "novo") {
      this.route.paramMap.pipe(
        switchMap(params => this.ordemService.obterPorId(+params.get('id')))
      ).subscribe(ordemServico => {
        ordemServico.prazo = new Date(`${ordemServico.prazo}T00:00:00`);
        ordemServico.dataProximaEntrega = new Date(`${ordemServico.dataProximaEntrega}T00:00:00`);
        this.form.patchValue(ordemServico);
        this.sprints = this.form.get('sprints').value;
        this.blockUI.stop();
      })
    }
  }


  carregarDropdownProjetos() {
    this.blockUI.start();
    this.projetoService.obterTodos().pipe(
      finalize(() => this.blockUI.stop())
    ).subscribe(res => {
      this.listaProjetos = res.map(item => {
        return {
          label: item.nome,
          value: item.id
        }
      })
    })
  }

  carregarDropdownSituacao() {
    this.blockUI.start();
    this.situacaoService.obterTodos().pipe(
      finalize(() => this.blockUI.stop())
    ).subscribe(res => {
      this.situacoes = res.map(item => {
        return {
          label: item.descricao,
          value: item.id
        }
      })
    })
  }

  carregarDropdownStatus() {
    this.blockUI.start();
    this.statusService.obterTodos().pipe(
      finalize(() => this.blockUI.stop()),
      tap(console.log)
    ).subscribe(res => {
      this.status = res.map(item => {
        return {
          label: item.descricao,
          value: item.id
        }
      })
    })
  }

  carregarStatus() {
    this.blockUI.start();
    this.statusService.obterTodos().pipe(
      finalize(() => this.blockUI.stop()),
      ).subscribe(status => this.listaStatus = status);
}

obterNomeStatus(id: number) {
  return this.listaStatus.find(status => status.id == id).descricao;
}

adicionarEditarSprint(event) {
  if (!event.id) {
    this.sprints.push(event);
    return;
  }
  this.sprints = this.sprints.filter(sprint => sprint.id !== event.id).concat(event);
}

showDialogSprint(sprint = null) {
  this.sprintDialog.mostrarDialog(sprint);
}

  defaultDate(){
    
  }
}

