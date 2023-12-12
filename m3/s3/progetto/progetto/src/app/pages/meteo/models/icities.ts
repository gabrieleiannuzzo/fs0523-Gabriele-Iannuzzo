import { ILocalNames } from "./ilocal-names";

export interface ICities {
  name:string,
  local_names:Partial<ILocalNames>,
  lat:number,
  lon:number,
  country:string,
  state:string,
}
