import { IProduct } from '../../models/iproduct';
import { ShopService } from './../../services/shop.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products:IProduct[] = [];
  favouriteProducts:IProduct[] = [];
  cartProducts:IProduct[] = [];

  constructor(private shopService:ShopService){}

  ngOnInit(){
    this.shopService.getAll().subscribe(res => {
      this.products = res.products;
      console.log(this.products);
    });

    this.shopService.favouriteProducts$.subscribe(res => {
      this.favouriteProducts = res;
    });

    this.shopService.cartProducts$.subscribe(res => {
      this.cartProducts = res;
    });

    console.log(this.favouriteProducts);
  }

  toggleFavourite(product:IProduct){
    this.shopService.toggleFavouriteSubject(this.favouriteProducts, product);
  }

  toggleCart(product:IProduct){
    this.shopService.toggleCartSubject(this.cartProducts, product);
  }
}
