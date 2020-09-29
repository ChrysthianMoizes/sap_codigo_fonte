import { SelectItem } from 'primeng';
import { LiderService } from './../../../services/lider.service';
import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { ProjetoService } from '../../../services/projeto.service';

@Component({
  selector: 'app-projeto-list',
  templateUrl: './projeto-list.component.html',
  styleUrls: ['./projeto-list.component.css']
})
export class ProjetoListComponent implements OnInit {

  titulo: string = 'Lista de projetos';
  @BlockUI() blockUI: NgBlockUI;
  listaProjetos$: Observable<any>;
  listaProjetos: any = [];
  msgs: Message[] = [];
  listaClientes: any[] = [];
  listaLideres: any[] = [];

  colunas:any = [
    { field: 'nome', header: 'Nome' },
    { field: 'cliente', header: 'Cliente' },
    { field: 'lider', header: 'Lider' },
    { field: 'testador', header: 'Testador' },
    { field: 'revisor', header: 'Revisor' },
    { field: 'gerente', header: 'Gerente' },
    { field: 'ações', header: 'Ações' }
  ];
  constructor(
    private projetoService: ProjetoService,
    private clienteService: ClienteService,
    private liderService: LiderService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
      this.listarClientes();
      this.listarLideres();
      this.obterTodos();
  }

  obterTodos() {
    this.blockUI.start();
    this.listaProjetos$ = this.projetoService.obterTodos().pipe(
      finalize(() => this.blockUI.stop())
    )
  }

  deletar(id: number) {
    this.blockUI.start();
    this.projetoService.deletar(id).pipe(
      finalize(() => this.blockUI.stop())
    ).subscribe(
      () => this.obterTodos()
    );
  }
  confirm2(id) {
    this.confirmationService.confirm({
        message: 'Você deseja excluir o Projeto?',
        header: 'Confirmação de exclusão',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'Projeto excluído'}];
            this.deletar(id);
        },
        reject: () => {

        },
        key:"confirm"
    });
}

  listarLideres() {
      this.blockUI.start();
      this.liderService.obterTodos().pipe(
          finalize(() => this.blockUI.stop())
      ).subscribe(lideres => this.listaLideres = lideres);
  }

  listarClientes() {
    this.blockUI.start();
    this.clienteService.obterTodos().pipe(
        finalize(() => this.blockUI.stop())
    ).subscribe(clientes => this.listaClientes = clientes);
    }

    filtrarClientePorId(id: number):string  {
        return this.listaClientes.find(cliente => cliente.id == id).descricao;
    }

    filtrarLiderPorId(id: number):string  {
        return this.listaLideres.find(lider => lider.id == id).nome;
    }

}
