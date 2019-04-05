import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ListaTodosComponent } from './lista-todos/lista-todos.component';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';
import { RegistraProdutoComponent } from './registra-produto/registra-produto.component';
import { DeletaProdutoComponent } from './deleta-produto/deleta-produto.component';
import { PesquisaProdutoPipe } from './pesquisa-produto.pipe';

@NgModule({
  declarations: [
    ListaTodosComponent,
    AtualizaProdutoComponent,
    RegistraProdutoComponent,
    DeletaProdutoComponent,
    PesquisaProdutoPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
