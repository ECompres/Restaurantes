import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservaciones-cliente',
  templateUrl: './reservaciones-cliente.component.html',
  styleUrls: ['./reservaciones-cliente.component.css']
})
export class ReservacionesClienteComponent implements OnInit {

  nombreCliente = 'Elías';

  reservation = [
    {
      restaurant: 'Papitas calientes',
      state: 'Pensilvania',
      city: 'Philadelphia'
    },
    {
      restaurant: 'Papitas calientes',
      state: 'Pensilvania',
      city: 'Philadelphia'
    },
    {
      restaurant: 'Papitas calientes',
      state: 'Pensilvania',
      city: 'Philadelphia'
    },
    {
      restaurant: 'Papitas calientes',
      state: 'Pensilvania',
      city: 'Philadelphia'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
