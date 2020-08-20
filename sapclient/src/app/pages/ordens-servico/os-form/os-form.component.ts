import { SprintsRoutingModule } from './../../sprints/sprints-routing.module';
import { SituacaoService } from './../../../services/situacao.service';
import { ProjetoService } from './../../../services/projeto.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize, switchMap, tap } from 'rxjs/operators'

import{OrdemServico} from './../../../models/ordem-servico.model';
import { OrdemServicoService} from './../../../services/ordem-servico.service';
import { SelectItem } from 'primeng';

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
  situacoes: SelectItem[];
  
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
    private situacaoService: SituacaoService
  ) { }

  ngOnInit(): void {
    this.setAcaoAtual();
    this.iniciarForm();
    this.carregarDropdownProjetos();
    this.carregarDropdownSituacao();
    this.carregarOrdemServico();
  }

  private setAcaoAtual() {
    if(this.route.snapshot.url[0].path == 'novo')  {
        this.titulo = 'Cadastro de Ordens de Serviço';
        return;
    }
    this.titulo = 'Editando OS';
  }

  iniciarForm() {
      this.form = this.formBuilder.group({
          id: [null],
          nome: [null
            ,[
              Validators.required,
              Validators.minLength(3)
            ]
            ],
            dataProximaEntrega:[null],
          qtdDefeitosCliente:[null],
          qtdDefeitosInterno:[null],
          pontosFuncao: [null],
          fabrica: [null],
          idProjeto: [null],
          idSituacao: [null],
          prazo:[null],
          sprints:[null],


      })
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
      this.ordemService.salvar(recurso).pipe(
          finalize(() => this.blockUI.stop())
      ).subscribe(() => {
          const path: string = this.route.snapshot.parent.url[0].path;
          this.router.navigate([path]);
      })
  }

  carregarOrdemServico() {
    if (this.route.snapshot.url[0].path != "novo") {
        this.blockUI.start();
        this.route.paramMap.pipe(
            switchMap(params => this.ordemService.obterPorId(+params.get('id')))
        ).subscribe(ordemServico => {
            ordemServico.dataProximaEntrega = new Date(ordemServico.dataProximaEntrega);
            ordemServico.prazo= new Date(ordemServico.prazo);
            this.form.patchValue(ordemServico);
            this.blockUI.stop();
        })
    }
  }

  carregarDropdownProjetos(){
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

  carregarDropdownSituacao(){
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
}
