import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  titulo: string = 'Página principal'
  @BlockUI() blockUI: NgBlockUI;

  dashboard = [
    { os: 'site2', status: 'Em andamento', pf: '20', proxEntrega: '20/05', prazo: 'não', defeitoCliente: '1', defeitoInterno: '10', impedimento: 'não', revisor: 'Diego', testador: 'Ana', gerente: 'Chrys'},
    { os: 'site', status: 'Pausado', pf: '20', proxEntrega: '20/05', prazo: 'não', defeitoCliente: '1', defeitoInterno: '10', impedimento: 'não', revisor: 'Diego', testador: 'Ana', gerente: 'Chrys'},
    { os: 'site3', status: 'Pausado', pf: '20', proxEntrega: '20/05', prazo: 'não', defeitoCliente: '1', defeitoInterno: '10', impedimento: 'não', revisor: 'Diego', testador: 'Ana', gerente: 'Chrys'},
    { os: 'site4', status: 'Pausado', pf: '20', proxEntrega: '20/05', prazo: 'não', defeitoCliente: '1', defeitoInterno: '10', impedimento: 'não', revisor: 'Diego', testador: 'Ana', gerente: 'Chrys'},
    { os: 'site5', status: 'Pausado', pf: '20', proxEntrega: '20/05', prazo: 'não', defeitoCliente: '1', defeitoInterno: '10', impedimento: 'não', revisor: 'Diego', testador: 'Ana', gerente: 'Chrys'}
  ]

  colunas: any[] = [
    { header: 'OS' },
    { header: 'Status da OS' },
    { header: 'PF em execução' },
    { header: 'Próxima Entrega' },
    { header: 'A OS/Sprint está no prazo?' },
    { header: 'Defeito do Cliente' },
    { header: 'Defeito interno' },
    { header: 'Impedimento' },
    { header: 'Revisor de Código' },
    { header: 'Gerente' },
    { header: 'Testador' },
    { header: 'Ações' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
