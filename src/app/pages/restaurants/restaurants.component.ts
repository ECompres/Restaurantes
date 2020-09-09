import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/Services/restaurant.service';
import { Restaurants } from '../../Models/restaurants'
import { UsStatesPipe } from '../../pipes/us-states.pipe'
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(private restaurantService: RestaurantService, public userService: UserService, private route: Router) { }
  codeCountries: string[] = ["AW", "CA", "CN", "GP", "HK", "KN", "KY", "MO", "MX", "MY", "SV", "US", "VI"]
  public restaurants: Restaurants[]
  selectCode: string = "AW";
  logged: string = localStorage.getItem('logged');

  array = [
    "https://eldiariony.com/wp-content/uploads/sites/2/2020/03/jason-leung-poi7delfiva-unsplash.jpg?quality=60&strip=all&w=940",
    "https://www.mariel-hotel.com/wp-content/uploads/2019/04/maido.jpg",
    "https://ihg.scene7.com/is/image/ihg/crowne-plaza-santo-domingo-3064059878-4x3?qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0",
    "https://www.managementgourmet.com/wp-content/uploads/2019/02/RUYA-NEW-3-1080x675.jpg"
  ];
  ngOnInit(): void {
    if (localStorage.getItem('logged') == null) {
      
        this.route.navigate(['/welcome']);
      
    }
  }
  Go(code) {
    this.route.navigate(['searchRestaurants', code]);
  }
  log() {
    console.log(this.selectCode);
  }
}
