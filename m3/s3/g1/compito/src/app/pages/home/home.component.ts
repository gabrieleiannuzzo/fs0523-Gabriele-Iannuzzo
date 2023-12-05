import { Subscription } from 'rxjs';
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
  productsSubscription!:Subscription;
  favouriteSubscription!:Subscription;
  cartSubscription!:Subscription;

  constructor(private shopService:ShopService){}

  ngOnInit(){
    this.productsSubscription = this.shopService.getAll().subscribe(res => {
      this.products = res.products;
    });

    this.favouriteSubscription = this.shopService.favouriteProducts$.subscribe(res => {
      this.favouriteProducts = res;
    });

    this.cartSubscription = this.shopService.cartProducts$.subscribe(res => {
      this.cartProducts = res;
    });
  }

  toggleFavourite(product:IProduct){
    this.shopService.toggleFavouriteSubject(this.favouriteProducts, product);
  }

  toggleCart(product:IProduct){
    this.shopService.toggleCartSubject(this.cartProducts, product);
  }

  ngOnDestroy(){
    this.productsSubscription.unsubscribe();
    this.favouriteSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();
  }
}
