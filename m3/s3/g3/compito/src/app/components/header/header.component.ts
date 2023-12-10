import { Component } from '@angular/core';
import { AuthService } from '../../pages/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLogged!:boolean;

  constructor(private authService:AuthService){}

  ngOnInit(){
    this.authService.isLogged$.subscribe(data => {
      this.isLogged = data;
    });
  }

  logout(){
    this.authService.logout();
  }
}
