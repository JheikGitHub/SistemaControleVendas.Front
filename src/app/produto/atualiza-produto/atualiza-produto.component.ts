import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/modelos/produto';
import { ProdutoService } from '../produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-atualiza-produto',
  templateUrl: './atualiza-produto.component.html',
  styleUrls: ['./atualiza-produto.component.css']
})
export class AtualizaProdutoComponent implements OnInit {

  private form: FormGroup
  private produto: Produto;
  private id: number;
  private mensagem: string = '';

  constructor(private formBuild: FormBuilder,
    private service: ProdutoService,
    private router: Router,
    private parametro: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.parametro.snapshot.paramMap.get('id'));

    this.iniciaPropriedades();

    this.service.buscaProduto(this.id).subscribe(
      (data) => {
        this.produto = data,

          this.form.setValue({
            descricao: data.descricao,
            precoUnitario: data.precoUnitario
          });
      });
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
    console.log(this.produto);

     this.service.atualiza(this.id, this.produto).subscribe(
       () => { alert("Produto atualizado com sucesso"), this.router.navigateByUrl('/produto') },
       (erro: HttpErrorResponse) => {
         this.mensagem = erro.message, console.log(erro);
       }
     );
  }
}
