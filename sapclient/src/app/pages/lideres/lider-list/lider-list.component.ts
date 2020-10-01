import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { LiderService } from './../../../services/lider.service';

@Component({
  selector: 'app-lider-list',
  templateUrl: './lider-list.component.html',
  styleUrls: ['./lider-list.component.css']
})

export class LiderListComponent implements OnInit {
    titulo: string = 'Lista de líderes';
    @BlockUI() blockUI: NgBlockUI;
    listaLideres$: Observable<any>;
    listaLideres: any = [];
    msgs: Message[] = [];
    colunas: any = [
        { header: 'Nome', field:'nome', sort:'nome' },
        { header: 'Contato(s)', field:'contato', sort:'contato' },
        { header: 'Ações' },
    ];

  constructor(
      private liderService: LiderService,
      private confirmationService: ConfirmationService
  ) { }
  ngOnInit(): void {
      this.obterTodos();
  }
  
  obterTodos() {
    this.blockUI.start();
    this.listaLideres$ = this.liderService.obterTodos().pipe(
        finalize(() => this.blockUI.stop())
    )
  }

  deletar(id: number) {
    this.blockUI.start();
    this.liderService.deletar(id).pipe(
        finalize(() => this.blockUI.stop())
    ).subscribe(
        () => this.obterTodos()
    );
  }
  confirm2(id) {
    this.confirmationService.confirm({
        message: 'Você deseja excluir o Lider?',
        header: 'Confirmação de exclusão',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'Lider excluído'}];
            this.deletar(id);
        },
        reject: () => {

        },
        key:"confirm"
    });
}
}
