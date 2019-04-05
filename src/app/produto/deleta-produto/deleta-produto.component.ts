import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/modelos/produto';
import { ProdutoService } from '../produto.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-deleta-produto',
  templateUrl: './deleta-produto.component.html',
  styleUrls: ['./deleta-produto.component.css']
})
export class DeletaProdutoComponent implements OnInit {

  private id: number;
  private produto: Produto;
  private mensagem: string = '';

  constructor(
    private service: ProdutoService,
    private router: Router,
    private paramentro: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.paramentro.snapshot.paramMap.get('id'));

    this.service.buscaProduto(this.id).subscribe(
      (data) => {
      this.produto = data, console.log(this.produto);
      }
    );
  }

  deleta() {
    this.service.remove(this.id).subscribe(
      () => {
        alert('Produto excluido com sucesso.')
        this.router.navigateByUrl('produto')
      },
      (erro: HttpErrorResponse) => { this.mensagem = erro.message }
    );
  }
}
