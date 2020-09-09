import { Component, OnInit, Input } from '@angular/core';
import { Restaurants } from 'src/app/Models/restaurants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'firebase';
import { Reservation } from 'src/app/Models/reservation';

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.component.html',
  styleUrls: ['./detail-restaurant.component.scss']
})
export class DetailRestaurantComponent implements OnInit {

  @Input() restaurant: Restaurants;
  form: FormGroup;
  siderWidth = 120;
  contentHeight = 200;
  id = -1;

  fecha: any;
  hora: any;
  personas: any;
  user;
  reservation: Reservation;
  userID = localStorage.getItem("idUser");
  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.userService.getUsuario(this.userID).subscribe(
      (res) => {
        this.user = {
          name: res.data().name,
          lastName: res.data().lastName,
          email: res.data().email,
          password: res.data().password,
          reservations: res.data().reservations
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }

  initForm(): void {
    this.form = this.fb.group({
      reservationDate: [new Date(), Validators.required],
      reservationHour: [new Date(), Validators.required],
      people: [1, Validators.required],
    });
  }

  onSideResize({ width }: NzResizeEvent): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.siderWidth = width!;
    });
  }

  onContentResize({ height }: NzResizeEvent): void {
    cancelAnimationFrame(this.id);
    this.id = requestAnimationFrame(() => {
      this.contentHeight = height!;
    });
  }

  data(): void {

    this.reservation = {
      idRestaurant: this.restaurant.id,
      fecha: this.form.value.reservationDate,
      hora: this.form.value.reservationHour,
      cantidadPersonas: this.form.value.people,
    }
    this.user.reservations.push(this.reservation);
    this.userService.updateUsuario(this.userID, this.user);

  }

  validForm(): void {
    for (const key in this.form.controls) {
      if (Object.prototype.hasOwnProperty.call(this.form.controls, key)) {
        const element = this.form.controls[key];
      }
    }
  }
}
