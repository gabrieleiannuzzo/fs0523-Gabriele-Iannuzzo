import { IPost } from "./ipost";

export class Post implements IPost{
  constructor(
    public title:string,
    public body:string,
    public category:string,
    public author:string,
    public active:boolean,
    public id?:number
  ){}
}
