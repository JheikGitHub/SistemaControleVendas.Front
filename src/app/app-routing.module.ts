import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'vendas'
  },
  {
    path: 'produto', loadChildren: './produto/produto.module#ProdutoModule'
  },
  {
    path: 'vendas', loadChildren: './vendas/vendas.module#VendasModule'
  },
  {
    path: 'vendedor', loadChildren: './vendedor/vendedor.module#VendedorModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
