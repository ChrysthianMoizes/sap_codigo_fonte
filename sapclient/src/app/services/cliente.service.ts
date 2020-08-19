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
    api: string = `${environment.apiUrl}/dominios/clientes`;

    constructor(
        private http: HttpClient
    ) { }

    obterTodos(): Observable<any> {
        return this.http.get(`${this.api}`)
    }

    obterPorId(id: number): Observable<Cliente> {
        return this.http.get(`${this.api}/${id}`).pipe(
            map(recurso => Object.assign(new Cliente(), recurso))
        )
    }

}
