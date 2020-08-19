import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { finalize } from 'rxjs/operators';
import { Lider } from './../../../models/lider.model';
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
    colunas: any = [
        { header: 'Nome' },
        { header: 'Contato(s)' },
        { header: 'Ações' },
    ];

    // lideres:Lider[] = [
    //     new Lider(1, 'Fulano', '27 99911-2210'),
    //     new Lider(2, 'Cliclano', '27 99911-2210'),
    //     new Lider(3, 'Beltrano', '27 99911-2210'),
    //     new Lider(4, 'John Doe', '27 99911-2210')
    // ];

  constructor(
      private liderService: LiderService
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

}