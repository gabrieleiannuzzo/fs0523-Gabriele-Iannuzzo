import { IClouds } from "./iclouds";
import { IMain } from "./imain";
import { IRain } from "./irain";
import { ISys } from "./isys";
import { IWeather } from "./iweather";
import { IWind } from "./iwind";

export interface ICityMeteoArray {
  dt:number,
  main:IMain,
  weather:IWeather[],
  clouds:IClouds,
  wind:IWind,
  visibility:number,
  pop:number,
  rain:IRain,
  sys:ISys,
  dt_txt:string,
}
