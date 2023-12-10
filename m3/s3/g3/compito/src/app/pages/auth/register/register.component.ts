import { Component } from '@angular/core';
import { IRegister } from '../models/iregister';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerObj:IRegister = {
    username: "",
    email: "",
    password: "",
  }

  constructor(
    private authService:AuthService,
    private router:Router,
  ){}

  register(registerObj:IRegister):void{
    this.authService.register(registerObj).subscribe(data => {
      this.router.navigate(["/auth/login"])
    });
  }
}
