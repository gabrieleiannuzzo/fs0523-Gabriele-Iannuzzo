import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loading:boolean = false;
  error!:boolean;
  notExistingUser!:boolean;
  wrongPassword!:boolean;
  emailRegex:RegExp = /^[a-zA-Z0-9._%+-]{3,}@([a-zA-Z0-9-]{3,}\.)+[a-zA-Z]{2,}$/;
  loadingSubscription!:Subscription;
  errorSubscription!:Subscription;
  notExistingUserSubscription!:Subscription;
  wrongPasswordSubscription!:Subscription;

  constructor(
    private authService:AuthService,
    private router:Router,
  ){}

  ngOnInit(){
    this.loadingSubscription = this.authService.loading$.subscribe(data => {
      this.loading = data;
    })

    this.errorSubscription = this.authService.error$.subscribe(data => {
      this.error = data;
    })

    this.notExistingUserSubscription = this.authService.notExistingUser$.subscribe(data => {
      this.notExistingUser = data;
    })

    this.wrongPasswordSubscription = this.authService.wrongPassword$.subscribe(data => {
      this.wrongPassword = data;
    })
  }

  ngOnDestroy(){
    this.loadingSubscription.unsubscribe();
    this.errorSubscription.unsubscribe();
    this.notExistingUserSubscription.unsubscribe();
    this.wrongPasswordSubscription.unsubscribe();
  }

  login(form:NgForm){
    this.authService.resetEmail();
    this.authService.resetPassword();
    this.authService.startLoading();
    this.authService.login(form.form.value).subscribe(data => {
      this.router.navigate(["/meteo"])
    });
  }

  resetEmail(){
    this.authService.resetEmail();
  }

  resetPassword(){
    this.authService.resetPassword();
  }
}
