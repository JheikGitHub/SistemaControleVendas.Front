import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../vendedor.service';
import { Vendedor } from 'src/app/modelos/vendedor';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-todos-vendedor',
  templateUrl: './todos-vendedor.component.html',
  styleUrls: ['./todos-vendedor.component.css']
})
export class TodosVendedorComponent implements OnInit {

  private vendedores: Vendedor[] = [];
  private mensagem: string = '';

  constructor(private service: VendedorService) { }

  ngOnInit() {
    this.service.buscaTodos().subscribe(
      (data) => { this.vendedores = data },
      (erro: HttpErrorResponse) => { this.mensagem = erro.message }
    );
  }

}
