import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ILogin } from '../models/ilogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj:ILogin = {
    email: "",
    password: "",
  }

  constructor(
    private authService:AuthService,
    private router:Router,
  ){}

  login(loginObj:ILogin):void{
    this.authService.login(this.loginObj).subscribe(data => {
      this.router.navigate(["/"]);
    });
  }
}
