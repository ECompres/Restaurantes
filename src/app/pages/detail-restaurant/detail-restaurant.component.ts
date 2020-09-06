import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RestaurantService } from 'src/app/Services/restaurant.service';
import { Restaurants } from 'src/app/Models/restaurants';

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.component.html',
  styleUrls: ['./detail-restaurant.component.css']
})
export class DetailRestaurantComponent implements OnInit {

  @Input()
  restaurant: Restaurants;

  fechaReservacion: any;
  horaReservacion: any;
  cantidadPersonas: any;
  demoValue;


  data() {
    alert(this.fechaReservacion)
    alert(this.horaReservacion)
    alert(this.demoValue)
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}