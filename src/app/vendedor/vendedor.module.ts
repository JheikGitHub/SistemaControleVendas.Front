import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { TodosVendedorComponent } from './todos-vendedor/todos-vendedor.component';
import { ComissaoVendedorComponent } from './comissao-vendedor/comissao-vendedor.component';

@NgModule({
  declarations: [TodosVendedorComponent, ComissaoVendedorComponent],
  imports: [
    CommonModule,
    VendedorRoutingModule
  ]
})
export class VendedorModule { }
