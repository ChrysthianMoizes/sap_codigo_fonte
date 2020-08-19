import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment.prod';
import { OrdemServico } from './../models/ordemServico.model';

@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {

  api: string = `${environment.apiUrl}/ordens-servico`;

  constructor(
    private http: HttpClient
  ) { }

  obterTodos(): Observable<any> {
    return this.http.get(`${this.api}`)
  }

  obterPorId(id: number): Observable<OrdemServico> {
    return this.http.get(`${this.api}/${id}`).pipe(
      map(recurso => Object.assign(new OrdemServico(), recurso))
    )
  }

  deletar(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }


}
