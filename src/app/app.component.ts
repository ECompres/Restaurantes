import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './Services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isCollapsed = false;
  logged: string = localStorage.getItem('logged');
  loggedVal: boolean;

  constructor(private route: Router) {
  }

  cerrarSesion() {
    localStorage.clear();
    this.route.navigateByUrl('welcome');
  }

  ngOnInit(): void {
    if (localStorage.getItem('logged') != null) {
      if (this.logged == "true") {
        this.loggedVal = true;
        
      } else {
        this.route.navigateByUrl('welcome');
      }
    }
  }
}
