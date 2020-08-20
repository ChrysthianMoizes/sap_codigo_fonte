import { Sprint } from './../models/sprint.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment.prod';
import { Projeto } from './../models/projeto.model';
import { OrdemServico } from './../models/ordem-servico.model';


@Injectable({
    providedIn: 'root'
  })
  export class SprintService {

      api: string = `${environment.apiUrl}/sprint`;

    constructor(
        private http: HttpClient
    ) { }

    obterTodos(): Observable<any> {
      return this.http.get(`${this.api}`)
    }

    salvar(recurso: Sprint): Observable<any> {
        if (recurso.id) {
            return this.atualizar(recurso);
        }
        return this.cadastrar(recurso);
    }

    obterPorId(id: number): Observable<Sprint> {
        return this.http.get(`${this.api}/${id}`).pipe(
            map(recurso => Object.assign(new Sprint(), recurso))
        )
    }

    deletar(id: number) {
        return this.http.delete(`${this.api}/${id}`);
    }

    private cadastrar(recurso: Sprint): Observable<Sprint> {
        return this.http.post(`${this.api}`, recurso).pipe(
            map(recurso => Object.assign(new Sprint(), recurso))
        );
    }
    private atualizar(recurso: Sprint): Observable<Sprint> {
        return this.http.put(`${this.api}`, recurso).pipe(
            map(recurso => Object.assign(new Sprint(), recurso))
        );
    }
}
