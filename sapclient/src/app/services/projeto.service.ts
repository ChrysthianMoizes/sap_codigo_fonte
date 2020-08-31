import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment.prod';
import { Projeto } from './../models/projeto.model';

@Injectable({
    providedIn: 'root'
  })
  export class ProjetoService {

      api: string = `${environment.apiUrl}/projetos`;

    constructor(
        private http: HttpClient
    ) { }

    obterTodos(): Observable<any> {
      return this.http.get(`${this.api}`)
    }

    salvar(recurso: Projeto): Observable<any> {
        if (recurso.id) {
            return this.atualizar(recurso);
        }
        return this.cadastrar(recurso);
    }

    obterPorId(id: number): Observable<Projeto> {
        return this.http.get(`${this.api}/${id}`).pipe(
            map(recurso => Object.assign(new Projeto(), recurso))
        )
    }

    deletar(id: number) {
        return this.http.delete(`${this.api}/${id}`);
    }

    pinto(){
        return [
            {
                id: 1,
                nome: "Ana",
                idCliente: 78,
                idLider: 53,
                testador: "Hogger",
                revisor: "Rai",
                gerente: "Chrys"
            }
        ]
    }

    private cadastrar(recurso: Projeto): Observable<Projeto> {
        return this.http.post(`${this.api}`, recurso).pipe(
            map(recurso => Object.assign(new Projeto(), recurso))
        );
    }
    private atualizar(recurso: Projeto): Observable<Projeto> {
        return this.http.put(`${this.api}`, recurso).pipe(
            map(recurso => Object.assign(new Projeto(), recurso))
        );
    }
}
