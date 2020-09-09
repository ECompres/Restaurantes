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
  returnedArray: Array<any>;

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
    this.returnedArray = this.contentArray.slice(0, 1);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }
}
