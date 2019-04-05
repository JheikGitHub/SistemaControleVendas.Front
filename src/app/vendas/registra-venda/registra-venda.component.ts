import { HttpErrorResponse } from '@angular/common/http';
import { VendedorService } from './../../vendedor/vendedor.service';
import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Venda } from 'src/app/modelos/venda';
import { Vendedor } from 'src/app/modelos/vendedor';
import { ProdutoService } from 'src/app/produto/produto.service';
import { Produto } from 'src/app/modelos/produto';

@Component({
  selector: 'app-registra-venda',
  templateUrl: './registra-venda.component.html',
  styleUrls: ['./registra-venda.component.css']
})
export class RegistraVendaComponent implements OnInit {

  private form: FormGroup;
  private venda: Venda;
  private qtd = 0;
  private valor = 0;
  private produto: Produto;
  private produtos: Produto[] = [];
  private vendedores: Vendedor[] = [];
  private mensagem: string = '';

  constructor(private service: VendaService,
    private formBuild: FormBuilder,
    private router: Router,
    private produtoService: ProdutoService,
    private vendedorService: VendedorService) { }

  ngOnInit() {
    this.buscaTodosProdutos();
    this.buscaTodosVendedor();
    this.iniciaPropriedades();
  }

  iniciaPropriedades() {
    this.form = this.formBuild.group(
      {
        vendedorId: ['', Validators.required],
        quantidadeProduto: ['', Validators.required],
        produtoId: ['', Validators.required]
      }
    );
  }

  buscaTodosProdutos() {
    this.produtoService.buscaTodos().subscribe(
      (data) => {
        this.produtos = data
      }
    )
  }

  buscaTodosVendedor() {
    this.vendedorService.buscaTodos().subscribe(
      (data) => {
        this.vendedores = data;
      }
    );
  }

  validacoes() {
    if (this.form.controls['vendedorId'].status == 'INVALID') {
      return this.mensagem = 'Escolha de um vendedor é obrigatorio.';
    }

    if (this.form.controls['quantidadeProduto'].status == 'INVALID') {
      return this.mensagem = 'A quantidade do produto é obrigatoria.';
    }

  }

  registraVenda() {
    if (this.form.invalid)
      return this.validacoes();

    this.produto = new Produto();
    this.venda = new Venda();

    this.venda = this.form.getRawValue();
    this.produto = this.form.get('produtoId').value;
    this.venda.produtoId = this.produto.id;
    this.venda.valorTotal = (this.produto.precoUnitario * this.venda.quantidadeProduto);

    this.service.registra(this.venda).subscribe(
      () => { alert("Venda concluida"), this.router.navigateByUrl('') },
      (erro: HttpErrorResponse) => { this.mensagem = erro.message }
    );
  }
}

