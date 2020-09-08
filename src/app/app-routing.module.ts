import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { SearchRestaurantsComponent } from './pages/search-restaurants/search-restaurants.component';
import { DetailRestaurantComponent } from './pages/detail-restaurant/detail-restaurant.component';
import { ReservacionesClienteComponent } from './pages/reservaciones-cliente/reservaciones-cliente.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'searchRestaurants/:codeCountry', component: SearchRestaurantsComponent },
  { path: 'detailrestaurant', component: DetailRestaurantComponent },
  { path: "reservacionesCliente", component: ReservacionesClienteComponent },
  { path: "**", component: RestaurantsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
