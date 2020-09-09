import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/user';
import { Restaurants } from 'src/app/Models/restaurants';
import { RestaurantService } from 'src/app/Services/restaurant.service';
import { Reservation } from 'src/app/Models/reservation';

@Component({
  selector: 'app-reservaciones-cliente',
  templateUrl: './reservaciones-cliente.component.html',
  styleUrls: ['./reservaciones-cliente.component.css']
})
export class ReservacionesClienteComponent implements OnInit {


  nombreCliente: string = localStorage.getItem("name") + " " + localStorage.getItem("lastName");
  page = 1;
  returnedArray: Array<any>;
  userID: string = localStorage.getItem("idUser")
  usuario: User;
  reservacionClienteModal = false;
  reservacion: Reservation;
  restauranteSeleccionado: Restaurants;
  restaurantesCliente = [];

  constructor(private userService: UserService, private restaurantService: RestaurantService) { }

  loadRestaurants(id) {
    this.restaurantService.getRestaurant(id).subscribe(
      (res) => {
        this.restaurantesCliente.push(res);
        console.log(this.restaurantesCliente);
      },
      (err) => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
    this.returnedArray = this.restaurantesCliente.slice(0, 1);
    if (this.userID != null) {
      this.userService.getUsuario(this.userID).subscribe(
        (res) => {
          this.usuario = {
            name: res.data().name,
            lastName: res.data().lastName,
            email: res.data().email,
            password: res.data().password,
            reservations: res.data().reservations
          };
          if (this.usuario.reservations.length > 0) {
            for (let i = 0; i < this.usuario.reservations.length; i++) {
              this.loadRestaurants(this.usuario.reservations[i].idRestaurant)
            }
          }
        },
        (err) => console.log(err)
      );
    }

  }
  getData(index) {
    this.reservacionClienteModal = true;
    this.reservacion = this.usuario.reservations[index]
    this.restauranteSeleccionado = this.restaurantesCliente[index];
    console.log(this.reservacion);
    console.log(this.restauranteSeleccionado);

  }
  handleCancel() {
    this.reservacionClienteModal = false;
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.restaurantesCliente.slice(startItem, endItem);
  }
}
