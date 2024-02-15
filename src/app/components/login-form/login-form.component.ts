import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  get email ( ) {
    return this.loginForm.get('email')
  }

  get password ( ) {
    return this.loginForm.get('password')
  }


  //Submit del form de login
  submitLogin(){
    if(this.loginForm.valid) {
      console.table(this.loginForm.value);
      //TODO peticion a authService
      this.loginForm.reset();
    }
  }

}
