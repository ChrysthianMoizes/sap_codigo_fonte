import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize, switchMap } from 'rxjs/operators';
import { SelectItem } from 'primeng'

import { LiderService } from './../../../services/lider.service';
import { ProjetoService } from './../../../services/projeto.service';
import { ClienteService } from 'src/app/services/cliente.service';

import { Projeto } from 'src/app/models/projeto.model';


@Component({
    selector: 'app-projeto-form',
    templateUrl: './projeto-form.component.html',
    styleUrls: ['./projeto-form.component.css']
})
export class ProjetoFormComponent implements OnInit {
    titulo: string = 'Cadastro de projeto';
    acaoAtual: string;
    form: FormGroup;
    formSubmetido: boolean = false;

    clientes: SelectItem[] = [];
    lideres: SelectItem[] = [];

    @BlockUI() blockUI: NgBlockUI;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private projetoService: ProjetoService,
        private liderService: LiderService,
        private clienteService: ClienteService,
    ) { }
    ngOnInit(): void {
        this.setAcaoAtual();
        this.obterClientesDropDown();
        this.obterLideresDropDown();
        this.iniciarForm();
        this.carregarProjeto();
    }

    private setAcaoAtual() {
        if (this.route.snapshot.url[0].path == 'novo') {
            this.titulo = 'Cadastro de Projeto';
            return;
        }
        this.titulo = 'Editando projeto';
    }
    iniciarForm() {
        this.form = this.formBuilder.group({
            id: [null],
            nome: [null, [Validators.required, Validators.minLength(3)]],
            testador: [null, [Validators.required, Validators.minLength(3)]],
            revisor: [null, [Validators.required, Validators.minLength(3)]],
            gerente: [null, [Validators.required, Validators.minLength(3)]],
            idLider: [null, [Validators.required, Validators.minLength(3)]],
            idCliente: [null, [Validators.required, Validators.minLength(3)]],
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
        const recurso = Object.assign(new Projeto(), this.form.value);
        this.projetoService.salvar(recurso).pipe(
            finalize(() => this.blockUI.stop())
        ).subscribe(() => {
            const path: string = this.route.snapshot.parent.url[0].path;
            this.router.navigate([path]);
        })
    }

    carregarProjeto() {
        if (this.route.snapshot.url[0].path != "novo") {
            this.blockUI.start();
            this.route.paramMap.pipe(
                switchMap(params => this.projetoService.obterPorId(+params.get('id')))
            ).subscribe(projeto => {
                this.form.patchValue(projeto);
                this.blockUI.stop();
            })
        }
    }

    obterClientesDropDown() {
        this.blockUI.start();
        this.clienteService.obterTodos().pipe(
            finalize(() => this.blockUI.stop())
        ).subscribe(clientes => {
            this.clientes = clientes.map(cliente => {
                return {
                    label: cliente.descricao,
                    value: cliente.id
                }
            })
        })
    }

    obterLideresDropDown() {
        this.blockUI.start();
        this.liderService.obterTodos().pipe(
            finalize(() => this.blockUI.stop())
        ).subscribe(lideres => {
            this.lideres = lideres.map(lider => {
                return {
                    label: lider.nome,
                    value: lider.id
                }
            })
        })
    }
}
