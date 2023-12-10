import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { ILogin } from './models/ilogin';
import { IRegister } from './models/iregister';
import { IResponseObj } from './models/iresponse-obj';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService();
  authSubject = new BehaviorSubject<IResponseObj|null>(null);
  user$ = this.authSubject.asObservable();
  isLogged$ = this.user$.pipe(map(user => !!user))

  constructor(
    private http:HttpClient,
    private router:Router,
  ) {
    this.restoreUser();
  }

  apiUrl:string = "http://localhost:3000/";
  loginUrl:string = this.apiUrl + "login";
  registerUrl:string = this.apiUrl + "register";

  login(loginObj:ILogin):Observable<IResponseObj>{
    return this.http.post<IResponseObj>(this.loginUrl, loginObj).pipe(tap(data => {
      this.authSubject.next(data)
      localStorage.setItem("accessData", JSON.stringify(data));
      // this.autoLogout(data.accessToken)
    }));
  }

  register(registerObj:IRegister):Observable<IResponseObj>{
    return this.http.post<IResponseObj>(this.registerUrl, registerObj);
  }

  logout():void{
    this.authSubject.next(null);
    localStorage.removeItem("accessData");
    this.router.navigate(["/"]);
  }

  autoLogout(jwt:string):void{
    const expDate:Date = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    const expMilliseconds:number = expDate.getTime() - new Date().getTime();

    setTimeout(() => {
      this.logout();
    }, expMilliseconds);
  }

  restoreUser():void{
    const userJson:string|null = localStorage.getItem("accessData");
    if (!userJson) return;

    const accessData:IResponseObj = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(accessData.accessToken)) return;

    this.autoLogout(accessData.accessToken);
    this.authSubject.next(accessData);
  }
}
