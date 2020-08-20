import { OrdemServicoService } from './../../../services/ordem-servico.service';
import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize, switchMap } from 'rxjs/operators';
import { Sprint } from './../../../models/sprint.model';
import {SprintService} from './../../../services/sprint.service';
import { from } from 'rxjs';
import {CheckboxModule} from 'primeng/checkbox';
import { SelectItem } from 'primeng';
import { StatusService } from 'src/app/services/status.service';


@Component({
  selector: 'app-sprint-form',
  templateUrl: './sprint-form.component.html',
  styleUrls: ['./sprint-form.component.css']
})
export class SprintFormComponent implements OnInit {
  titulo: string = 'Cadastro de Sprint';
  acaoAtual: string;
  form: FormGroup;
  formSubmetido: boolean = false;
  status: SelectItem[];
  os: SelectItem[];


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
      private sprintService: SprintService,
    private statusService: StatusService,
    private ordemServico :OrdemServicoService



  ) { }

  ngOnInit(): void {
    this.carregarDropdownStatus();
    this.carregarDropdownOS();
    this.setAcaoAtual();
    this.iniciarForm();
    this.carregarSprint();
    this.salvar();
   

    }

    private setAcaoAtual() {
      if(this.route.snapshot.url[0].path == 'novo')  {
          this.titulo = 'Cadastro de Projeto';
          return;
        }
        this.titulo = 'Editando projeto';
      }
      iniciarForm() {
        this.form = this.formBuilder.group({
            id: [null],
            nome: [null, [Validators.required, Validators.minLength(3)]],
            dataInicio: [null],
            dataTermino:[null],
            pontosFuncao:[null],
            impedimento:[null],
            noPrazo:[null],

            status:[null],
            ordemServico:[null],

        })
    }
    enviarForm() {
        this.formSubmetido = true;
        if (!this.form.invalid) {
            this.salvar();
        }
    }
    salvar() {

        this.blockUI.start();
        const recurso = Object.assign(new Sprint(), this.form.value);
        this.sprintService.salvar(recurso).pipe(
            finalize(() => this.blockUI.stop())
        ).subscribe(() => {
            const path: string = this.route.snapshot.parent.url[0].path;
            this.router.navigate([path]);
        })
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
  
    carregarDropdownStatus(){
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

    carregarDropdownOS(){
    
      this.blockUI.start();
      this.ordemServico.obterTodos().pipe(
          finalize(() => this.blockUI.stop())
      ).subscribe(res => {
          this.os = res.map(item => {
              return {
                  label: item.nome,
                  value: item.id
              }
          })
      })
    }
  
    // obterLideresDropDown() {
    //   this.blockUI.start();
    //   this.sprintService.obterTodos().pipe(
    //       finalize(() => this.blockUI.stop())
    //   ).subscribe(lideres => {
    //       this.sprint = lideres.map(lider => {
    //           return {
    //               label: lider.nome,
    //               value: lider.id
    //           }
    //       })
    //   })
    // }
  }


