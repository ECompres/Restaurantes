import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  setSeleccionado(user) {
    console.log(user);
  }
  ngOnInit() {
  }
  isVisibleRegister = false;
  isVisibleLogin = false;

  constructor() { }

  showModalRegister(): void {
    this.isVisibleRegister = true;
  }
  showModalLogin(): void {
    this.isVisibleLogin = true;
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisibleRegister = false;
    this.isVisibleLogin = false;

  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisibleRegister = false;
    this.isVisibleLogin = false;

  }
}
