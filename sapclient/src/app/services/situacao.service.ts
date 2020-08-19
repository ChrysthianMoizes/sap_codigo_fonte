import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment.prod';
import { TipoSituacao } from './../models/tipo-situacao.model';

@Injectable({
  providedIn: 'root'
})
export class SituacaoService {

    api: string = `${environment.apiUrl}/dominios/tipos-situacao`;

  constructor(
      private http: HttpClient
  ) { }

  obterTodos(): Observable<any> {
      return this.http.get(`${this.api}`)
  }
}
