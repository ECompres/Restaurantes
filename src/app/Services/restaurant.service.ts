import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getRestaurants(country: string, page: number, state?: string, city?: string, price?: number): Observable<any> {
    return this.http.get("http://opentable.herokuapp.com/api/restaurants?country=" + country + "&state=" + state + "&city=" + city + "&price="+price+"&per_page=100&page=" + page)
  }
  getRestaurantsFiltered(country: string, page: number, state?: string): Observable<any> {
    return this.http.get("http://opentable.herokuapp.com/api/restaurants?country=" + country + "&state=" + state + "&per_page=100&page=" + page)
  }
  getRestaurant(id: number) {
    return this.http.get("http://opentable.herokuapp.com/api/restaurants/" + id)
  }

}
