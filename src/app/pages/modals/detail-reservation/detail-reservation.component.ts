import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.scss']
})
export class DetailReservationComponent implements OnInit {
  @Input() reservacion;
  @Input() restauranteSeleccionado;
  constructor() { }
  get() {
    console.log(this.reservacion)
    console.log(this.restauranteSeleccionado)
  }
  ngOnInit(): void {
  }

}
