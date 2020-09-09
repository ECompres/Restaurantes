import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-reservaciones-cliente',
  templateUrl: './reservaciones-cliente.component.html',
  styleUrls: ['./reservaciones-cliente.component.css']
})
export class ReservacionesClienteComponent implements OnInit {


  nombreCliente: string = localStorage.getItem("name") + " " + localStorage.getItem("lastName");
  page = 1;

  contentArray = [
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
    }, {
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
    {
      restaurant: 'Papitas calientes',
      state: 'Pensilvania',
      city: 'Philadelphia'
    }, {
      restaurant: 'Papitas calientes',
      state: 'Pensilvania',
      city: 'Philadelphia'
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }
}
