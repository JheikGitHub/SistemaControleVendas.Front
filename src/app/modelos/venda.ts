import { Produto } from './produto';
export class Venda {

    id: number;
    vendedorId: number;
    produtoId: number;
    quantidadeProduto: number;
    valorTotal: number;
    dataCadastro: string;

    produto: Produto;

}