import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private authService:AuthService,
  ){}

  isLogged:boolean = false;
  isLoggedSubscription!:Subscription;

  ngOnInit(){
    this.isLoggedSubscription = this.authService.isLogged$.subscribe(data => {
      this.isLogged = data;
    });
  }

  ngOnDestroy(){
    this.isLoggedSubscription.unsubscribe();
  }
}
