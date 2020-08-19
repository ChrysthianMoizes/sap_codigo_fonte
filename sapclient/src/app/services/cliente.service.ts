import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment.prod';
import { Cliente } from './../models/cliente.model';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    // api: string = environment.apiUrl + '/Clientes';
    api: string = `${environment.apiUrl}/Clientes`;

    constructor(
        private http: HttpClient
    ) { }

    obterTodos(): Observable<any> {
        return this.http.get(`${this.api}`)
    }

    salvar(recurso: Cliente): Observable<any> {
        if (recurso.id) {
            return this.atualizar(recurso);
        }
        return this.cadastrar(recurso);
    }

    obterPorId(id: number): Observable<Cliente> {
        return this.http.get(`${this.api}/${id}`).pipe(
            map(recurso => Object.assign(new Cliente(), recurso))
        )
    }

    deletar(id: number) {
        return this.http.delete(`${this.api}/${id}`);
    }

    private cadastrar(recurso: Cliente): Observable<Cliente> {
        return this.http.post(`${this.api}`, recurso).pipe(
            map(recurso => Object.assign(new Cliente(), recurso))
        );
    }

    private atualizar(recurso: Cliente): Observable<Cliente> {
        return this.http.put(`${this.api}`, recurso).pipe(
            map(recurso => Object.assign(new Cliente(), recurso))
        );
    }
}
