import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';

import { Observable, of, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';


@Injectable()
export class ClienteService {
  private urlEndPoint: string = 'http://localhost:8080/api/clientes';
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    //return of(CLIENTES);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );
  }

}
