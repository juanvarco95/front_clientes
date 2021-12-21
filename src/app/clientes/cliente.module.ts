import { ClientesComponent } from './cliente/clientes.component';
import { ClienteService } from './cliente/cliente.service';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent},
]

@NgModule({
    declarations: [
        ClientesComponent,
        FormComponent,
        
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        FormsModule
    ],
    exports: [
        ClientesComponent,
    ],
    providers: [
        ClienteService,

    ]
})
export class ClienteModule {}