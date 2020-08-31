import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { finalize, switchMap } from 'rxjs/operators';
import { SelectItem } from 'primeng';

import { OrdemServicoService } from './../../../services/ordem-servico.service';
import { Sprint } from './../../../models/sprint.model';
import { SprintService } from './../../../services/sprint.service';

import { StatusService } from 'src/app/services/status.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-sprint-form',
  templateUrl: './sprint-form.component.html',
  styleUrls: ['./sprint-form.component.css']
})
export class SprintFormComponent implements OnInit {
  titulo: string = 'Cadastro de Sprint';
  acaoAtual: string;
  form: FormGroup;
  formEdit: FormGroup;
  formSubmetido: boolean = false;
  status: SelectItem[];
  exibir: boolean = false;
  sprint: Sprint = new Sprint();
  @BlockUI() blockUI: NgBlockUI;
  @Output() salvarSprint = new EventEmitter();

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private sprintService: SprintService,
    private statusService: StatusService,
    private ordemServico: OrdemServicoService

  ) { }

  ngOnInit(): void {
    this.carregarDropdownStatus();
    this.iniciarForm();
    this.carregarSprint();
    this.setAcaoAtual();
  }

  mostrarDialog(sprint = null) {
    this.iniciarForm();
    if (sprint) {
      sprint.dataInicio = new Date(sprint.dataInicio);
      sprint.dataTermino = new Date(sprint.dataTermino);
      this.form.patchValue(sprint)
    }
    this.exibir = true;
  }

 
  private setAcaoAtual() {
    if (this.route.snapshot.url[0].path == 'novo') {
      this.titulo = 'Cadastro de Sprints';
      return;
    }
    this.titulo = 'Editando Sprint';
  }


  iniciarForm(sprint = null) {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      dataInicio: [null, [Validators.required]],
      dataTermino: [null, [Validators.required]],
      pontosFuncao: [null, [Validators.required]],
      impedimento: [null, [Validators.required]],
      prazo: [null, [Validators.required]],
      idStatus: [null, [Validators.required]]
    })
  }

  enviarForm() {
    this.formSubmetido = true;
    if (!this.form.invalid) {
      const recurso = Object.assign(new Sprint(), this.form.value);
      this.salvarSprint.emit(recurso);
      this.fecharModal();
    }
  }

  fecharModal() {
    this.form.reset();
    this.exibir = false;
  }


  carregarSprint() {
    if (this.route.snapshot.url[0].path != "novo") {
      this.blockUI.start();
      this.route.paramMap.pipe(
        switchMap(params => this.sprintService.obterPorId(+params.get('id')))
      ).subscribe(sprint => {
        this.form.patchValue(sprint);
        this.blockUI.stop();
      })
    }
  }

  carregarDropdownStatus() {
    this.blockUI.start();
    this.statusService.obterTodos().pipe(
      finalize(() => this.blockUI.stop())
    ).subscribe(res => {
      this.status = res.map(item => {
        return {
          label: item.descricao,
          value: item.id
        }
      })
    })
  }

}


