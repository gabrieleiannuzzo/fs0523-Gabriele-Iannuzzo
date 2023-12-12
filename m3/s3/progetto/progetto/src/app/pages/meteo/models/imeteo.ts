import { ICityMeteoArray } from "./icity-meteo-array";
import { ICityMeteoObj } from "./icity-meteo-obj";

export interface IMeteo {
  cod:string,
  message:number,
  cnt:number,
  list:ICityMeteoArray[],
  city:ICityMeteoObj,
  country:string,
  population:number,
  timezone:number,
  sunrise:number,
  sunset:number
}
