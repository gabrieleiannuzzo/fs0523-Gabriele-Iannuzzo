import { IUser } from "./iuser";

export class User implements IUser{
  constructor(
    public name:string,
    public email:string,
    public id?:number,
  ){}
}
