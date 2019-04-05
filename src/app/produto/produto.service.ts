import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../modelos/produto';

const URL_API = 'https://localhost:44328/api/produto/';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  buscaTodos() {
    return this.http.get<Produto[]>(URL_API + 'busca-todos');
  }

  buscaProduto(idProduto: number) {
    return this.http.get<Produto>(URL_API + 'busca-produto/' + idProduto);
  }

  registra(produto: Produto) {
    return this.http.post(URL_API + 'registra', produto);
  }

  atualiza(idProduto: number, produto: Produto) {
    return this.http.put(URL_API + 'atualiza/' + idProduto, produto);
  }

  remove(idProduto: number) {
    return this.http.delete(URL_API + 'remove/' + idProduto);
  }
}
