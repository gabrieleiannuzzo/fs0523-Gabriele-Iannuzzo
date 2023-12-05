import { IProduct } from "./iproduct";

export interface IResult {
  limit:number;
  products:IProduct[];
  skip:number;
  total:number;
}
