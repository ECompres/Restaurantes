import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './Services/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  constructor(private restaurantService: RestaurantService) {
  }
  
  ngOnInit(): void {

  }
}
