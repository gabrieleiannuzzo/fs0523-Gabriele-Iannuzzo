import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ShopService } from '../../services/shop.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss'
})
export class PreferitiComponent {
  favouriteProducts:IProduct[] = [];
  cartProducts:IProduct[] = [];
  favouriteSubscription!:Subscription;
  cartSubscription!:Subscription;

  constructor(private shopService:ShopService){}

  ngOnInit(){
    this.favouriteSubscription = this.shopService.favouriteProducts$.subscribe(res => {
      this.favouriteProducts = res;
      console.log("Iscrizione effettuata ai favoriti");
    });

    this.cartSubscription = this.shopService.cartProducts$.subscribe(res => {
      this.cartProducts = res;
      console.log("Iscrizione effettuata al carrello");
    });

    console.log("ngOnInit avvenuto")
  }

  toggleFavourite(product:IProduct){
    this.shopService.toggleFavouriteSubject(this.favouriteProducts, product);
  }

  toggleCart(product:IProduct){
    this.shopService.toggleCartSubject(this.cartProducts, product);
  }

  ngOnDestroy(){
    this.favouriteSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();
  }
}
