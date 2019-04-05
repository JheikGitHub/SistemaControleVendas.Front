import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venda } from '../modelos/venda';

const URL_API = 'https://localhost:44328/api/venda/';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private http: HttpClient) { }

  buscaTodos() {
    return this.http.get<Venda[]>(URL_API + 'busca-todos');
  }

  registra(venda: Venda) {
    return this.http.post(URL_API + 'registra', venda);
  }

}
