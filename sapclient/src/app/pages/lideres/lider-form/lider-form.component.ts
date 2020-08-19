import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize, switchMap } from 'rxjs/operators';

import { LiderService } from './../../../services/lider.service';
import { Lider } from './../../../models/lider.model';
@Component({
    selector: 'app-lider-form',
    templateUrl: './lider-form.component.html',
    styleUrls: ['./lider-form.component.css']
})
export class LiderFormComponent implements OnInit {
    titulo: string = 'Cadastro de líder';
    acaoAtual: string;
    form: FormGroup;
    formSubmetido: boolean = false;
    @BlockUI() blockUI: NgBlockUI;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private liderService: LiderService
    ) { }

    ngOnInit(): void {
        this.setAcaoAtual();
        this.iniciarForm();
        this.carregarLider();
    }

    private setAcaoAtual() {
        if (this.route.snapshot.url[0].path == 'novo') {
            this.titulo = 'Cadastro de Líder';
            return;
        }
        this.titulo = 'Editando líder';
    }

    iniciarForm() {
        this.form = this.formBuilder.group({
            id: [null],
            nome: [null, [Validators.required, Validators.minLength(3)]],
            contato: [null]
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
        const recurso = Object.assign(new Lider(), this.form.value);
        this.liderService.salvar(recurso).pipe(
            finalize(() => this.blockUI.stop())
        ).subscribe(() => {
            const path: string = this.route.snapshot.parent.url[0].path;
            this.router.navigate([path]);
        })
    }

    carregarLider() {
        if (this.route.snapshot.url[0].path != "novo") {
            this.blockUI.start();
            this.route.paramMap.pipe(
                switchMap(params => this.liderService.obterPorId(+params.get('id')))
            ).subscribe(lider => {
                this.form.patchValue(lider);
                this.blockUI.stop();
            })
        }
    }

}