import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css']
})
export class SprintListComponent implements OnInit {

  @BlockUI() blockUI:NgBlockUI;

  titulo: string='Lista de Sprint'
  listaSprint:Observable<any>;
  

  constructor() { }

  ngOnInit(): void {
  }

}

