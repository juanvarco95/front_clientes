import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  titulo: string = 'Crear Cliente';
  cliente: Cliente = new Cliente();

  
  constructor(
    private clienteService: ClienteService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  

  ngOnInit(): void {
    this.cargarCliente()
  }

  cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if(id) {
        this.clienteService.getCliente(id).subscribe(
          (cliente) => this.cliente = cliente
        )
      }
    })
  }

  create(): void {
    this.clienteService.create(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes']);
        swal.fire('Nuevo cliente', `Cliente ${cliente.nombre} creado con éxito!`, 'success');
      }
    )
  }
    
  update(): void {
    this.clienteService.update(this.cliente).subscribe(
      cliente => {
      this.router.navigate(['/clientes']);        
      swal.fire('Nuevo Actualizado', `Cliente ${cliente.nombre} acualizado con éxito!`, 'success');
      }
    )
  }


}
