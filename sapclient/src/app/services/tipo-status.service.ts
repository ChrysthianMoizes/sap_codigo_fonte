import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from './../../environments/environment.prod';

const api: string = `${environment.apiUrl}/dominios/tipos-status`;

@Injectable({
  providedIn: 'root'
})
export class TipoStatusService {

    constructor(
        private http: HttpClient
      ) {}

      obterTodos(): Observable<any> {
        return this.http.get(`${api}`)
        }
}
