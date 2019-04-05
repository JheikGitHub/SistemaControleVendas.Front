import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Produto } from 'src/app/modelos/produto';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registra-produto',
  templateUrl: './registra-produto.component.html',
  styleUrls: ['./registra-produto.component.css']
})
export class RegistraProdutoComponent implements OnInit {

  private form: FormGroup;
  private produto: Produto;
  private mensagem: string = '';

  constructor(private formBuild: FormBuilder, private service: ProdutoService, private router: Router) { }

  ngOnInit() {
    this.iniciaPropriedades();
  }

  iniciaPropriedades() {
    this.form = this.formBuild.group(
      {
        descricao: ['', Validators.required],
        precoUnitario: ['', Validators.required]
      }
    );
  }

  validacoes() {
    if (this.form.controls['descricao'].status == 'INVALID') {
      return this.mensagem = 'Descrição é obrigatorio.';
    }

    if (this.form.controls['precoUnitario'].status == 'INVALID') {
      return this.mensagem = 'Preço unitario é obrigatorio.';
    }

  }

  onSubmit() {
    if (this.form.invalid)
      return this.validacoes();

    this.produto = new Produto();
    this.produto = this.form.getRawValue();

    this.service.registra(this.produto).subscribe(
      () => { alert("Produto salvo com sucesso"), this.router.navigateByUrl('/produto') },
      (erro: HttpErrorResponse) => {
        this.mensagem = erro.message, console.log(erro);
      }
    );
  }
}
