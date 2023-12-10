export interface IMeteo {
  interface RootObject {
    cod: string;
    message: number;
    cnt: number;
    list: (List | List2 | string)[];
    city: City;
  }
  interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  }
  interface Coord {
    lat: number;
    lon: number;
  }
  interface List2 {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    sys: Sys;
    dt_txt: string;
  }
  interface List {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    rain: Rain;
    sys: Sys;
    dt_txt: string;
  }
  interface Sys {
    pod: string;
  }
  interface Rain {
    '3h': number;
  }
  interface Wind {
    speed: number;
    deg: number;
    gust: number;
  }
  interface Clouds {
    all: number;
  }
  interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  }
}
