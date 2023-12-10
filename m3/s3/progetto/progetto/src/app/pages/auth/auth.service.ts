import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from './models/ilogin';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, Subject, catchError, map, tap, throwError } from 'rxjs';
import { IUserResponse } from './models/iuser-response';
import { IRegister } from './models/iregister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper:JwtHelperService = new JwtHelperService();

  authSubject = new BehaviorSubject<IUserResponse|null>(null);
  errorSubject = new Subject<boolean>();
  notExistingUserSubject = new Subject<boolean>();
  wrongPasswordSubject = new Subject<boolean>();
  loadingSubject = new Subject<boolean>();

  user$ = this.authSubject.asObservable();
  isLogged$ = this.user$.pipe(map(user => !!user));
  error$ = this.errorSubject.asObservable();
  notExistingUser$ = this.notExistingUserSubject.asObservable();
  wrongPassword$ = this.wrongPasswordSubject.asObservable();
  loading$ = this.loadingSubject.asObservable();

  constructor(
    private http:HttpClient,
    private router:Router,
  ) {
    this.restoreUser();
  }

  apiUrl:string = "http://localhost:3000/";
  loginUrl:string = this.apiUrl + "login";
  registerUrl:string = this.apiUrl + "register";

  login(loginObj:ILogin):Observable<IUserResponse>{
    return this.http.post<IUserResponse>(this.loginUrl, loginObj)
    .pipe(tap(data => {
      this.authSubject.next(data);
      localStorage.setItem("accessData", JSON.stringify(data));
      this.autoLogout(data.accessToken);
    }),
    catchError((error) => {
      this.loadingSubject.next(false);
      console.log(error);

      switch (error.error) {
        case ("Incorrect password"):
          this.wrongPasswordSubject.next(true);
          return throwError(() => new Error);
        case ("Password is too short"):
          this.wrongPasswordSubject.next(true);
          return throwError(() => new Error);
        case ("Cannot find user"):
          this.notExistingUserSubject.next(true);
          return throwError(() => new Error);
        default:
          this.errorSubject.next(true);
          setTimeout(() => {
            this.errorSubject.next(false);
          }, 4000);
      }

      return throwError(() => new Error);
    }))
  }

  register(registerObj:IRegister):Observable<IUserResponse>{
    return this.http.post<IUserResponse>(this.registerUrl, registerObj)
    .pipe(catchError((error) => {
      this.loadingSubject.next(false);
      this.errorSubject.next(true);
      setTimeout(() => {
        this.errorSubject.next(false);
      }, 4000);

      return throwError(() => new Error());
    }))
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

    const accessData:IUserResponse = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(accessData.accessToken)) return;

    this.autoLogout(accessData.accessToken);
    this.authSubject.next(accessData);
  }

  startLoading():void{
    this.loadingSubject.next(true);
  }

  stopLoading():void{
    this.loadingSubject.next(false);
  }

  resetEmail():void{
    this.notExistingUserSubject.next(false);
  }

  resetPassword():void{
    this.wrongPasswordSubject.next(false);
  }
}
