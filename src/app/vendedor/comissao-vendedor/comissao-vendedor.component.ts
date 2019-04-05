import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../vendedor.service';
import { VendedorComissao } from 'src/app/modelos/vendedorComissao';

@Component({
  selector: 'app-comissao-vendedor',
  templateUrl: './comissao-vendedor.component.html',
  styleUrls: ['./comissao-vendedor.component.css']
})
export class ComissaoVendedorComponent implements OnInit {

  private vendedores: VendedorComissao[] = [];
  constructor(private service: VendedorService) { }

  ngOnInit() {
    this.service.buscaVendedorComissao().subscribe(
      (data) => { this.vendedores = data }
    );
  }

}
