import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment.prod';
import { TipoStatus } from './../models/tipostatus.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

    api: string = `${environment.apiUrl}/dominios/tipos-status`;

  constructor(
      private http: HttpClient
  ) { }

  obterTodos(): Observable<any> {
      return this.http.get(`${this.api}`)
  }
}