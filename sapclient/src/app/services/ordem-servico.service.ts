import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment.prod';

import{OrdemServico} from './../models/ordem-servico.model';


@Injectable({
    providedIn:'root'
})
export class OrdemServicoService {

    // api: string = environment.apiUrl + '/ordem_servico';
    api: string = `${environment.apiUrl}/ordens-servico`;

  constructor(
      private http: HttpClient
  ) { }

  obterTodos(): Observable<any> {
    return this.http.get(`${this.api}`)
  }

  salvar(recurso: OrdemServico): Observable<any> {
      if (recurso.id) {
          return this.atualizar(recurso);
      }
      return this.cadastrar(recurso);
  }

  obterPorId(id: number): Observable<OrdemServico> {
      return this.http.get(`${this.api}/${id}`).pipe(
        map(recurso => Object.assign(new OrdemServico(), recurso))
      )
  }

  obterPorIdProjeto(id: number): Observable<any> {
    return this.http.get(`${this.api}/${id}/projeto`);
}

  deletar(id: number) {
      return this.http.delete(`${this.api}/${id}`);
  }

  private cadastrar(recurso: OrdemServico): Observable<OrdemServico> {
      return this.http.post(`${this.api}`, recurso).pipe(
          map(recurso => Object.assign(new OrdemServico(), recurso))

      );
  }

  private atualizar(recurso: OrdemServico): Observable<OrdemServico> {
      return this.http.put(`${this.api}`, recurso).pipe(
          map(recurso => Object.assign(new OrdemServico(), recurso))
      );
  }


}
