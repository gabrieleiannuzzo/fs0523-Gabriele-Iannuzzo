import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { IPost } from '../models/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  async getAll(bool:boolean):Promise<IPost[]>{
    const res:Response = await fetch("http://localhost:3000/posts", {
      headers:{
        "content-type": "application/json",
      }
    });
    const posts:IPost[] = await res.json();

    return posts.filter(p => p.active == bool);
  }

  async create(p:Partial<IPost>):Promise<IPost>{
    const res:Response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(p)
    });
    return await res.json();
  }

  async delete(id:number):Promise<void>{
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      }
    })
  }

  async update(id:number, obj:any):Promise<void>{
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj)
    })
  }
}
