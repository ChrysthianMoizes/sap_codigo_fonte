import { Lider } from './../../../models/lider.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lider-list',
  templateUrl: './lider-list.component.html',
  styleUrls: ['./lider-list.component.css']
})
export class LiderListComponent implements OnInit {

  colunas: any = [
    { header: 'Nome' },
    { header: 'Contato(s)' }
  ]

  lideres: Lider[] = [
    new Lider(1, 'Fulano', '27 99876-5432'),
    new Lider(2, 'Siclano', '27 99876-5432'),
    new Lider(3, 'Beutrano', '27 99876-5432'),
    new Lider(4, 'Fulano', '27 99876-5432')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  nome: string = 'teste'

}
