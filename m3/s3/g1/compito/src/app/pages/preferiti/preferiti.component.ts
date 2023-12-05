import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss'
})
export class PreferitiComponent {
  favouriteProducts:IProduct[] = [];
  cartProducts:IProduct[] = [];

  constructor(private shopService:ShopService){}

  ngOnInit(){
    this.shopService.favouriteProducts$.subscribe(res => {
      this.favouriteProducts = res;
      console.log(res);
    });

    this.shopService.cartProducts$.subscribe(res => {
      this.cartProducts = res;
    });
  }

  toggleFavourite(product:IProduct){
    this.shopService.toggleFavouriteSubject(this.favouriteProducts, product);
  }

  toggleCart(product:IProduct){
    this.shopService.toggleCartSubject(this.favouriteProducts, product);
  }
}
