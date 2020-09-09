import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from '../../../Models/user';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  validateForm!: FormGroup;
  public usuario;
  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.usuario = {
      name: this.validateForm.value.name,
      lastName: this.validateForm.value.lastName,
      email: this.validateForm.value.email,
      password: this.validateForm.value.password,
      reservations: []
    }

    this.userService.registerUser(this.usuario)
      .then(
        (res) => {
          Swal.fire("Confirmado", "Usuario agregado!", "success")
        }
      )
      .catch(
        (error) => { console.log("Error: " + error) }
      )

  }

  updateConfirmValidator(): void {

    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
    });
  }
}
