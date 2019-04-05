import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodasVendasComponent } from './todas-vendas/todas-vendas.component';
import { RegistraVendaComponent } from './registra-venda/registra-venda.component';

const routes: Routes = [
  {
    path: '', component: TodasVendasComponent
  },
  {
    path:'registra',component:RegistraVendaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendasRoutingModule { }
