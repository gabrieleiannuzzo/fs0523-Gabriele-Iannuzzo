import { IMicrotask } from "./imicrotask";

export interface ITodo {
  id:number;
  title:string;
  microtasks:IMicrotask[];
  completed:boolean;
  creationDate:number;
  completionDate:number|null;
}
