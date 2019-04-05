import { Pipe, PipeTransform } from '@angular/core';
import { Venda } from '../modelos/venda';


@Pipe({
  name: 'filtroData'
})
export class FiltroDataPipe implements PipeTransform {

  transform(vendas: Venda[], data: string): any {
    if (!vendas) return [];
    if (!data) return vendas;

    let date = new Date(data).toISOString();

    let novaData = date.substring(0, 19);
    console.log(novaData,vendas);
    
    return vendas.filter(venda => {
      return venda.dataCadastro.toString() === novaData;

    });
  }

}
