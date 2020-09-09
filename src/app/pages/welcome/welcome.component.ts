import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  logged: string = localStorage.getItem('logged');
  loggedVal: boolean;
  constructor(private route: Router) { }


  isVisibleRegister = false;
  isVisibleLogin = false;



  ngOnInit() {
    if (localStorage.getItem('logged') != null) {
      if (this.logged == "true") {
        this.route.navigateByUrl('restaurants')
      }
    }
  }
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
