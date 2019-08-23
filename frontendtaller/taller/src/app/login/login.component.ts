import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../servicios/servicios_auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get formControls() { return this.loginForm.controls; }

  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }


    this.authService.login(this.loginForm.value)
    .subscribe(
      res => {
        console.log(res);
        if (res.token != null) {
         console.log(res.token);
         localStorage.setItem('login', JSON.stringify(res.token));
         localStorage.setItem('logindata', JSON.stringify(res));
         console.log(this.authService.getToken());
         this.router.navigate(['/admin']);

     } else { alert('Error de autenticacion'); }

   },
   err => {console.log(err);


 }
    );

  }

}
