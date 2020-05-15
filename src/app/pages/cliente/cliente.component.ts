import { Component, OnInit } from '@angular/core';
import { ModelCliente } from 'src/app/models/cliente';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente: ModelCliente[] = [];
 
  constructor() { }

  ngOnInit() {
  }

}
