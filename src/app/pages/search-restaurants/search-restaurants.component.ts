import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurants } from 'src/app/Models/restaurants';
import { RestaurantService } from 'src/app/Services/restaurant.service';

@Component({
  selector: 'app-search-restaurants',
  templateUrl: './search-restaurants.component.html',
  styleUrls: ['./search-restaurants.component.css']
})
export class SearchRestaurantsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService) { }
  listOfData: Restaurants[];
  page: number = 1;
  countryCode: string;
  total_entries: number;
  per_page: number;
  current_page: number;
  restaurants: Restaurants[]
  nzPaginationPosition = "top"
  reservateVisible = false;
  state: string[];
  estadoSelect: string;
  city: string;
  precio: string;
  precios = ["$", "$$", "$$$", "$$$$"]

  getRestaurants(page) {
    this.restaurantService.getRestaurants(this.countryCode, page, "", "").subscribe(
      (res) => {
        console.log(res)
        this.total_entries = res.total_entries;
        this.per_page = res.per_page;
        this.current_page = res.current_page;
        this.listOfData = res.restaurants;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  restaurant: Restaurants;


  reservate(data) {
    this.reservateVisible = true;
    console.log(data);
    this.restaurant = data
  }

  handleCancel() {
    this.reservateVisible = false;
  }
  cities: any;

  citiesFilter(data) {
    var newArray = [];
    var lookupObject = {};

    for (var i in data) {
      lookupObject[data[i].city] = data[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i].city);
    }
    this.cities = newArray;
  }

  changed() {
    this.restaurantService.getRestaurants(this.countryCode, this.page, this.estadoSelect, "").subscribe(
      (res) => {
        this.listOfData = res.restaurants;
        this.citiesFilter(this.listOfData);
        this.city = "";
        console.log(this.cities)
      },
      (error) => {
        console.log(error)
      }
    )
  }
  cityChanged() {
    alert(this.city)
    this.restaurantService.getRestaurants(this.countryCode, this.page, this.estadoSelect, this.city).subscribe(
      (res) => {
        this.listOfData = res.restaurants;
        console.log(this.cities)
      },
      (error) => {
        console.log(error)
      }
    )
  }
  precioChanged() {
    alert(this.precio.length)
    if (this.city = "") {
      this.restaurantService.getRestaurants(this.countryCode, this.page, this.estadoSelect, "", this.precio.length).subscribe(
        (res) => {
          this.listOfData = res.restaurants;
          this.citiesFilter(this.listOfData);
        },
        (error) => {
          console.log(error)
        }
      )
    }
    else if (this.estadoSelect = "") {
      this.restaurantService.getRestaurants(this.countryCode, this.page, "", "", this.precio.length).subscribe(
        (res) => {
          this.listOfData = res.restaurants;
          this.citiesFilter(this.listOfData);
        },
        (error) => {
          console.log(error)
        }
      )
    } else {
      this.restaurantService.getRestaurants(this.countryCode, this.page, this.estadoSelect, this.city, this.precio.length).subscribe(
        (res) => {
          this.listOfData = res.restaurants;
          this.citiesFilter(this.listOfData);
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (res) => {
        this.countryCode = res.codeCountry
      }
    )
    this.getRestaurants(this.page);
    if (this.countryCode == "MX") {
      this.state = ["AGU", "BCN", "BCS", "CAM", "CHP", "CHH", "CMX3", "COA", "COL", "DUR", "GUA", "GRO", "HID", "JAL", "MEX", "MIC", "MOR", "NAY", "NLE", "OAX", "PUE", "QUE", "ROO", "SLP", "SIN", "SON", "TAB", "TAM", "TLA", "VER", "YUC", "ZAC"]
    }
    else if (this.countryCode == "US") {
      this.state = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
    }
    else if (this.countryCode == "CA") {
      this.state = ["BC", "AB", "SK", "MB", "ON", "QC", "NS", "NB"]
    }
    console.log(this.state)
  }

}
