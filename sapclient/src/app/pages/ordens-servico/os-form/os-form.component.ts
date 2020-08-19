import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize, switchMap } from 'rxjs/operators'

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

  @BlockUI() blockUI: NgBlockUI;

  constructor(

    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private ordemService: OrdemServicoService
  ) { }

  ngOnInit(): void {
    this.setAcaoAtual();
    this.iniciarForm();
    this.carregarOrdemServico();
    this.carregarDropdownProjetos();
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
          prazo:[null]
         

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
            this.form.patchValue(ordemServico);
            this.blockUI.stop();
        })
    }
  }

  carregarDropdownProjetos(){
    this.listaProjetos = [
      {
        label: 'Projeto 1',
        value: 1
      },
      {
        label: 'Projeto 2',
        value: 2
      }
    ]
  }

}