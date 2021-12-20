import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClienteService } from './cliente/cliente.service';
import { ClientesComponent } from './cliente/clientes.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';


const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'clientes', component: ClientesComponent},
]

@NgModule({
    declarations: [
        ClientesComponent,
        FormComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    exports: [
        ClientesComponent,
    ],
    providers: [
        ClienteService,

    ]
})
export class ClienteModule {}