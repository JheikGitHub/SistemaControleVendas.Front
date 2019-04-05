import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../modelos/produto';

@Pipe({
  name: 'buscar'
})
export class PesquisaProdutoPipe implements PipeTransform {

  transform(produtos: Produto[], valor: string) {
    if (!produtos) return [];
    if (!valor) return produtos;

    return produtos.filter(produto => { return produto.descricao.toLocaleLowerCase().includes(valor.toLocaleLowerCase()) })
  }

}
