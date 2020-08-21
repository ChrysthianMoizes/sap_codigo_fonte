import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';

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
