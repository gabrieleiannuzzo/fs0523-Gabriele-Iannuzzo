import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { IDbUser } from '../models/idb-user';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  loading:boolean = false;
  apiUrl:string = "http://localhost:3000/users";
  existingUsername:boolean = false;
  existingEmail:boolean = false;
  error!:boolean;
  emailRegex:RegExp = /^[a-zA-Z0-9._%+-]{3,}@([a-zA-Z0-9-]{3,}\.)+[a-zA-Z]{2,}$/; // regex basilare con condizioni su chiocciola, punto e almeno 3 lettere prima della chiocciola e del punto e almeno 2 dopo il punto.
  passwordRegex:RegExp = /^.{4,18}$/; // inserisco una regex che rispetti la lunghezza minima richiesta da json server e una lunghezza massima decisa da me
  errorSubscription!:Subscription;
  loadingSubscription!:Subscription;

  constructor(
    private authService:AuthService,
    private router:Router,
    private http:HttpClient
  ){}

  ngOnInit(){
    this.errorSubscription = this.authService.error$.subscribe(data => {
      this.error = data;
    })

    this.loadingSubscription = this.authService.loading$.subscribe(data => {
      this.loading = data
    })
  }

  ngOnDestroy(){
    this.errorSubscription.unsubscribe();
    this.loadingSubscription.unsubscribe();
  }

  register(form:NgForm):void{
    this.authService.startLoading();
    this.http.get<IDbUser[]>(this.apiUrl).subscribe(data => {
      this.existingUsername = data.some(user => user.username === form.form.value.username);

      this.existingEmail = data.some(user => user.email === form.form.value.email);

      if (this.existingUsername || this.existingEmail) {
        this.authService.stopLoading();
        return;
      }

      this.authService.register(form.form.value).subscribe(data => {
        this.router.navigate(["/auth/login"]);
      })
    })
  }

  resetInput(inputIndex:number):void{
    switch (inputIndex) {
      case 1:
        this.existingUsername = false;
        return;
      case 2:
        this.existingEmail = false;
        return;
      default:
        return;
    }
  }
}
