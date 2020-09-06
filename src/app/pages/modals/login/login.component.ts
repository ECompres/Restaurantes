import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private route: Router) { }
  email: string;
  password: string;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.email = this.validateForm.value.email;
    this.password = this.validateForm.value.password;
    this.userService.loginUser(this.email, this.password)
      .then(
        (res) => {
          this.route.navigate(['/restaurants']);
          
        }
      )
      .catch(
        (error) => {
          console.log("Error " + error)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El usuario no existe!',
          })
        }
      )
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
