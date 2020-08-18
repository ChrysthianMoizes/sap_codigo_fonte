import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from './../../environments/environment.prod';
import { Lider } from './../models/lider.model';

@Injectable({
  providedIn: 'root'
})
export class LiderService {

    // api: string = environment.apiUrl + '/lideres';
    api: string = `${environment.apiUrl}/lideres`;

  constructor(
      private http: HttpClient
  ) { }

  obterTodos(): Observable<any> {
    return this.http.get(`${this.api}`)
  }
}
