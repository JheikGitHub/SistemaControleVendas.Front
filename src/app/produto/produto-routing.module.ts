import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTodosComponent } from './lista-todos/lista-todos.component';
import { RegistraProdutoComponent } from './registra-produto/registra-produto.component';
import { DeletaProdutoComponent } from './deleta-produto/deleta-produto.component';
import { AtualizaProdutoComponent } from './atualiza-produto/atualiza-produto.component';

const routes: Routes = [
  {
    path: '', component: ListaTodosComponent
  },
  {
    path: 'registra', component: RegistraProdutoComponent
  },
  {
    path: 'atualiza/:id', component: AtualizaProdutoComponent
  },
  {
    path: 'remove/:id', component: DeletaProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
