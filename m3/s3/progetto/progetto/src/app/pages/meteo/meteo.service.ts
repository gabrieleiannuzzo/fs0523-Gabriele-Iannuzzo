import { IFavouriteCity } from './models/ifavourite-city';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  errorSubject:Subject<boolean> = new Subject<boolean>
  favouritesErrorSubject:Subject<boolean> = new Subject<boolean>
  loadingSubject:Subject<boolean> = new Subject <boolean>
  error$ = this.errorSubject.asObservable();
  favouritesError$ = this.favouritesErrorSubject.asObservable();
  loading$ = this.loadingSubject.asObservable();

  constructor(private http:HttpClient){}

  apiUrl:string = "http://localhost:3000/favourite_cities";

  getMeteo(lat:number, lon:number):Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=4f1397727f7743cfdc42e7c7a580cbc2&units=metric`)
    .pipe(catchError((error) => {
      this.errorSubject.next(true);
      this.stopLoading();

      setTimeout(() => {
        this.errorSubject.next(false);
      }, 4000);

      return throwError(() => new Error());
    }))
  }

  getCities(q:string):Observable<any>{
    return this.http.get(`http://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=5&appid=4f1397727f7743cfdc42e7c7a580cbc2`)
    .pipe(catchError((error) => {
      this.errorSubject.next(true);
      this.stopLoading();

      setTimeout(() => {
        this.errorSubject.next(false);
      }, 4000);

      return throwError(() => new Error());
    }))
  }

  getFavourites(userId:number|undefined):Observable<any>{
    return this.http.get(this.apiUrl + "?user_id=" + userId)
    .pipe(catchError((error) => {
      this.favouritesErrorSubject.next(true);
      this.stopLoading();

      setTimeout(() => {
        this.favouritesErrorSubject.next(false);
      }, 4000);

      return throwError(() => new Error());
    }))
  }

  addToFavourites(userId:number|undefined, lat:number, lon:number, nome:string):Observable<any>{
    const favouriteCityObj:IFavouriteCity = {
      lat: lat,
      lon: lon,
      user_id: userId,
      nome: nome,
    }
    return this.http.post(this.apiUrl, favouriteCityObj)
    .pipe(catchError((error) => {
      this.errorSubject.next(true);
      this.stopLoading();

      setTimeout(() => {
        this.errorSubject.next(false);
      }, 4000);

      return throwError(() => new Error());
    }))
  }

  removeFromFavourites(id:number):Observable<any>{
    return this.http.delete(this.apiUrl + "/" + id)
    .pipe(catchError((error) => {
      this.errorSubject.next(true);
      this.stopLoading();

      setTimeout(() => {
        this.errorSubject.next(false);
      }, 4000);

      return throwError(() => new Error());
    }))
  }

  startLoading():void{
    this.loadingSubject.next(true);
  }

  stopLoading():void{
    this.loadingSubject.next(false);
  }
}
