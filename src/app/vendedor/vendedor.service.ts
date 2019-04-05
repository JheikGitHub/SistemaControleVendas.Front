import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendedor } from '../modelos/vendedor';
import { VendedorComissao } from '../modelos/vendedorComissao';

const URL_API = 'https://localhost:44328/api/vendedor/';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private http: HttpClient) { }

  buscaTodos() {
    return this.http.get<Vendedor[]>(URL_API + 'busca-todos');
  }

  buscaVendedorComissao() {
    return this.http.get<VendedorComissao[]>(URL_API + 'comissao');
  }
}
