import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { VendasRoutingModule } from './vendas-routing.module';
import { TodasVendasComponent } from './todas-vendas/todas-vendas.component';
import { RegistraVendaComponent } from './registra-venda/registra-venda.component';
import { FiltroDataPipe } from './filtro-data.pipe';

@NgModule({
  declarations: [
    TodasVendasComponent,
    RegistraVendaComponent,
    FiltroDataPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    VendasRoutingModule
  ]
})
export class VendasModule { }
