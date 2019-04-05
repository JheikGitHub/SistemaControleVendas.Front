import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/modelos/produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lista-todos',
  templateUrl: './lista-todos.component.html',
  styleUrls: ['./lista-todos.component.css']
})
export class ListaTodosComponent implements OnInit {

  private produtos: Produto[] = [];

  constructor(private service: ProdutoService) { }

  ngOnInit() {
    this.service.buscaTodos().subscribe(
      (data) => {
      this.produtos = data
      }
    );
  }

}
