export interface IPost {
  title:string;
  body:string;
  category:string;
  author:string;
  active:boolean;
  id?:number|undefined;
}
