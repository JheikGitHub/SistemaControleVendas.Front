import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosVendedorComponent } from './todos-vendedor/todos-vendedor.component';
import { ComissaoVendedorComponent } from './comissao-vendedor/comissao-vendedor.component';

const routes: Routes = [
  {
    path: '', component: TodosVendedorComponent
  },
  {
    path: 'comissao', component: ComissaoVendedorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedorRoutingModule { }
