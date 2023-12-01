import { Injectable } from '@angular/core';
import { ITodo } from '../models/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  loaderShow:boolean = false;
  loaderDots:number = 0;
  loaderContent = "Caricando";
  loaderAnimation!:any;

  constructor() { }

  url:string = "http://localhost:3000/todos";

  getAll():Promise<ITodo[]>{
    return fetch(this.url).then(res => res.json());
  }

  getAllCompleted():Promise<ITodo[]>{
    return fetch(this.url).then(res => res.json()).then(res => res.filter((t:ITodo) => t.completed));
  }

  getById(id:number):Promise<ITodo>{
    return fetch(this.url + "/" + id).then(res => res.json());
  }

  create(todo:Partial<ITodo>):Promise<ITodo>{
    return fetch(this.url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todo),
    }).then(res => res.json());
  }

  update(todo:ITodo):Promise<ITodo>{
    return fetch(`${this.url}/${todo.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todo),
    }).then(res => res.json());
  }

  delete(id:number):Promise<ITodo>{
    return fetch(`${this.url}/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      }
    }).then(res => res.json());
  }

  loaderStart():boolean{
    this.loaderShow = true;
    this.loaderDots = 0;
    this.loaderContent = "Caricando";
    this.loaderAnimation = setInterval(() => {
      if (this.loaderDots < 3) {
        this.loaderContent += "."
        this.loaderDots++;
      } else {
        this.loaderContent = "Caricando"
        this.loaderDots = 0;
      }
    }, 500);
    return this.loaderShow;
  }

  loaderStop():boolean{
    clearInterval(this.loaderAnimation);
    this.loaderShow = false;
    return this.loaderShow;
  }
}
