import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservaciones-cliente',
  templateUrl: './reservaciones-cliente.component.html',
  styleUrls: ['./reservaciones-cliente.component.css']
})
export class ReservacionesClienteComponent implements OnInit {

  nombreCliente:string = "Elías";
  nombreRestaurante:string = "Papitas calientes";
  estado:string = "Pensilvania";
  ciudad:string = "Philadelphia"
  constructor() { }

  ngOnInit(): void {
  }

}
