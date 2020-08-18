import { Lider } from './../../../models/lider.model';
import { Component, OnInit, NgModule } from '@angular/core';

import {BlockUI,NgBlockUI, BlockUIModule} from 'ng-block-ui';
import { from, Observable } from 'rxjs';
import { LiderService } from 'src/app/services/lider.service';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-lider-list',
  templateUrl: './lider-list.component.html',
  styleUrls: ['./lider-list.component.css']
})
export class LiderListComponent implements OnInit {




@BlockUI( ) blockUI:NgBlockUI
listaLideres$:Observable<any>;
    colunas:any=[
      { header:'Nome'},
      {header:'Contato(s)'},
      {header:'Ações'}
    ];

//     Lider:Lider[]=[
// new Lider(1,'Fulano1','27 999999996'),
// new Lider(2,'Fulano2','27 999999997'),
// new Lider(3,'Fulano3','27 999999998'),
// new Lider(4,'Fulano4','27 999999999'),

    // ]
  constructor(private liderService:LiderService) { }

  ngOnInit(): void {
    this.obterTodos();
  }

  obterTodos(){
    this.blockUI.start();
    this.liderService.obterTodos().pipe(
    finalize(() => this.blockUI.stop())
  )
}


}
