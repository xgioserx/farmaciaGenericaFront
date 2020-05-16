import { Component, OnInit } from '@angular/core';
import { ModelClientes } from 'src/app/models/clientes';


@Component({
  selector: 'app-cliente',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  cliente: ModelClientes[] = [];
  constructor() { }

  ngOnInit() {
  }

}
