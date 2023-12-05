import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { IResult } from '../models/iresult';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  apiUrl:string = "https://dummyjson.com/products";

  subjectFavouriteProducts:Subject<IProduct[]> = new Subject<IProduct[]>;
  subjectCartProducts:Subject<IProduct[]> = new Subject<IProduct[]>;
  favouriteProducts$ = this.subjectFavouriteProducts.asObservable();
  cartProducts$ = this.subjectCartProducts.asObservable();

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<IResult>(this.apiUrl);
  }

  toggleFavouriteSubject(favouritesArray:IProduct[], product:IProduct){
    if (favouritesArray.indexOf(product) == (-1)) {
      favouritesArray.push(product);
    } else {
      favouritesArray.splice(favouritesArray.indexOf(product), 1);
    }

    this.subjectFavouriteProducts.next(favouritesArray);
  }

  toggleCartSubject(cartArray:IProduct[], product:IProduct){
    if (cartArray.indexOf(product) == (-1)) {
      cartArray.push(product);
    } else {
      cartArray.splice(cartArray.indexOf(product), 1);
    }

    this.subjectCartProducts.next(cartArray);
  }
}
