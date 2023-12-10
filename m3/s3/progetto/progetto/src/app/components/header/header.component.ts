import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../pages/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  active:boolean = false;
  isLogged:boolean = false;
  isLoggedSubscription!:Subscription;

  constructor(private authService:AuthService){}

  ngOnInit(){
    this.isLoggedSubscription = this.authService.isLogged$.subscribe(data => {
      this.isLogged = data;
    })
  }

  ngOnDestroy(){
    this.isLoggedSubscription.unsubscribe();
  }

  toggleActive(){
    this.active = !this.active;
  }

  logout(){
    this.toggleActive();
    this.authService.logout();
  }
}
