import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Venda } from 'src/app/modelos/venda';

@Component({
  selector: 'app-todas-vendas',
  templateUrl: './todas-vendas.component.html',
  styleUrls: ['./todas-vendas.component.css']
})
export class TodasVendasComponent implements OnInit {

  private vendas: Venda[] = [];
  private mensagem: string = '';

  constructor(private vendaService: VendaService) { }

  ngOnInit() {
    this.vendaService.buscaTodos().subscribe(
      (data) => {
        this.vendas = data;
      },
      (erro: HttpErrorResponse) => {
        this.mensagem = erro.message;
      }
    );
  }

}
