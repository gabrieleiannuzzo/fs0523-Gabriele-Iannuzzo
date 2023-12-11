import { Component } from '@angular/core';
import { MeteoService } from './meteo.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Observable, Subscription } from 'rxjs';
import { IUserResponse } from '../auth/models/iuser-response';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.scss'
})
export class MeteoComponent {
  meteoRegex:RegExp = /[a-zA-Z]{3,}/;
  cityMeteo:any = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1702220400,
        "main": {
          "temp": 15.72,
          "feels_like": 14.94,
          "temp_min": 14.32,
          "temp_max": 15.72,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 1007,
          "humidity": 61,
          "temp_kf": 1.4
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.93,
          "deg": 1,
          "gust": 8.35
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-12-10 15:00:00"
      },
      {
        "dt": 1702231200,
        "main": {
          "temp": 12.65,
          "feels_like": 11.77,
          "temp_min": 10.76,
          "temp_max": 12.65,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1008,
          "humidity": 69,
          "temp_kf": 1.89
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 3.52,
          "deg": 14,
          "gust": 7.39
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-10 18:00:00"
      },
      {
        "dt": 1702242000,
        "main": {
          "temp": 9.58,
          "feels_like": 8.99,
          "temp_min": 9.58,
          "temp_max": 9.58,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 1009,
          "humidity": 73,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 38
        },
        "wind": {
          "speed": 1.68,
          "deg": 6,
          "gust": 1.84
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-10 21:00:00"
      },
      {
        "dt": 1702252800,
        "main": {
          "temp": 9.05,
          "feels_like": 7.85,
          "temp_min": 9.05,
          "temp_max": 9.05,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 1009,
          "humidity": 75,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 66
        },
        "wind": {
          "speed": 2.29,
          "deg": 62,
          "gust": 2.87
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-11 00:00:00"
      },
      {
        "dt": 1702263600,
        "main": {
          "temp": 8.84,
          "feels_like": 8.16,
          "temp_min": 8.84,
          "temp_max": 8.84,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 1009,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 26
        },
        "wind": {
          "speed": 1.66,
          "deg": 77,
          "gust": 2.88
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-11 03:00:00"
      },
      {
        "dt": 1702274400,
        "main": {
          "temp": 9.61,
          "feels_like": 8.47,
          "temp_min": 9.61,
          "temp_max": 9.61,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 1009,
          "humidity": 79,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 53
        },
        "wind": {
          "speed": 2.34,
          "deg": 117,
          "gust": 5.38
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-11 06:00:00"
      },
      {
        "dt": 1702285200,
        "main": {
          "temp": 13.52,
          "feels_like": 13.02,
          "temp_min": 13.52,
          "temp_max": 13.52,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 1009,
          "humidity": 80,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 98
        },
        "wind": {
          "speed": 3.71,
          "deg": 195,
          "gust": 8.78
        },
        "visibility": 10000,
        "pop": 0.05,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-12-11 09:00:00"
      },
      {
        "dt": 1702296000,
        "main": {
          "temp": 14.27,
          "feels_like": 13.87,
          "temp_min": 14.27,
          "temp_max": 14.27,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1008,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 98
        },
        "wind": {
          "speed": 3.72,
          "deg": 182,
          "gust": 7.48
        },
        "visibility": 10000,
        "pop": 0.24,
        "rain": {
          "3h": 0.2
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-12-11 12:00:00"
      },
      {
        "dt": 1702306800,
        "main": {
          "temp": 13.94,
          "feels_like": 13.58,
          "temp_min": 13.94,
          "temp_max": 13.94,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1008,
          "humidity": 84,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 4.34,
          "deg": 162,
          "gust": 7.98
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-12-11 15:00:00"
      },
      {
        "dt": 1702317600,
        "main": {
          "temp": 13.14,
          "feels_like": 12.76,
          "temp_min": 13.14,
          "temp_max": 13.14,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1008,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 4.07,
          "deg": 143,
          "gust": 8.57
        },
        "visibility": 10000,
        "pop": 0.2,
        "rain": {
          "3h": 0.11
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-11 18:00:00"
      },
      {
        "dt": 1702328400,
        "main": {
          "temp": 13.77,
          "feels_like": 13.45,
          "temp_min": 13.77,
          "temp_max": 13.77,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1008,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 4.22,
          "deg": 148,
          "gust": 8.28
        },
        "visibility": 10000,
        "pop": 0.2,
        "rain": {
          "3h": 0.12
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-11 21:00:00"
      },
      {
        "dt": 1702339200,
        "main": {
          "temp": 14.22,
          "feels_like": 13.94,
          "temp_min": 14.22,
          "temp_max": 14.22,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1007,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 4.09,
          "deg": 162,
          "gust": 8.82
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-12 00:00:00"
      },
      {
        "dt": 1702350000,
        "main": {
          "temp": 14.29,
          "feels_like": 14.07,
          "temp_min": 14.29,
          "temp_max": 14.29,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1007,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.64,
          "deg": 150,
          "gust": 5.59
        },
        "visibility": 10000,
        "pop": 0.2,
        "rain": {
          "3h": 0.11
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-12 03:00:00"
      },
      {
        "dt": 1702360800,
        "main": {
          "temp": 13.93,
          "feels_like": 13.68,
          "temp_min": 13.93,
          "temp_max": 13.93,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1007,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.69,
          "deg": 129,
          "gust": 5.18
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-12 06:00:00"
      },
      {
        "dt": 1702371600,
        "main": {
          "temp": 15.5,
          "feels_like": 15.25,
          "temp_min": 15.5,
          "temp_max": 15.5,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1008,
          "humidity": 82,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.52,
          "deg": 148,
          "gust": 7.01
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-12-12 09:00:00"
      },
      {
        "dt": 1702382400,
        "main": {
          "temp": 16.85,
          "feels_like": 16.65,
          "temp_min": 16.85,
          "temp_max": 16.85,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1006,
          "humidity": 79,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 4.58,
          "deg": 178,
          "gust": 6.71
        },
        "visibility": 10000,
        "pop": 0.2,
        "rain": {
          "3h": 0.11
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-12-12 12:00:00"
      },
      {
        "dt": 1702393200,
        "main": {
          "temp": 15.92,
          "feels_like": 15.71,
          "temp_min": 15.92,
          "temp_max": 15.92,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 1006,
          "humidity": 82,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.61,
          "deg": 185,
          "gust": 6.5
        },
        "visibility": 10000,
        "pop": 0.2,
        "rain": {
          "3h": 0.15
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-12-12 15:00:00"
      },
      {
        "dt": 1702404000,
        "main": {
          "temp": 14.15,
          "feels_like": 13.94,
          "temp_min": 14.15,
          "temp_max": 14.15,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 1006,
          "humidity": 89,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.65,
          "deg": 128,
          "gust": 4.29
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-12 18:00:00"
      },
      {
        "dt": 1702414800,
        "main": {
          "temp": 13.92,
          "feels_like": 13.67,
          "temp_min": 13.92,
          "temp_max": 13.92,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 1005,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.59,
          "deg": 132,
          "gust": 4.14
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-12 21:00:00"
      },
      {
        "dt": 1702425600,
        "main": {
          "temp": 13.39,
          "feels_like": 13.08,
          "temp_min": 13.39,
          "temp_max": 13.39,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 1003,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.58,
          "deg": 139,
          "gust": 7.67
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-13 00:00:00"
      },
      {
        "dt": 1702436400,
        "main": {
          "temp": 13.76,
          "feels_like": 13.49,
          "temp_min": 13.76,
          "temp_max": 13.76,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 1001,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 83
        },
        "wind": {
          "speed": 4.84,
          "deg": 148,
          "gust": 9.48
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-13 03:00:00"
      },
      {
        "dt": 1702447200,
        "main": {
          "temp": 13.51,
          "feels_like": 13.24,
          "temp_min": 13.51,
          "temp_max": 13.51,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 1000,
          "humidity": 89,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 91
        },
        "wind": {
          "speed": 4.63,
          "deg": 145,
          "gust": 9.8
        },
        "visibility": 10000,
        "pop": 0.01,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-13 06:00:00"
      },
      {
        "dt": 1702458000,
        "main": {
          "temp": 15.34,
          "feels_like": 15.12,
          "temp_min": 15.34,
          "temp_max": 15.34,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 1000,
          "humidity": 84,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 4.82,
          "deg": 148,
          "gust": 9.72
        },
        "visibility": 10000,
        "pop": 0.14,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-12-13 09:00:00"
      },
      {
        "dt": 1702468800,
        "main": {
          "temp": 17.24,
          "feels_like": 17.06,
          "temp_min": 17.24,
          "temp_max": 17.24,
          "pressure": 1007,
          "sea_level": 1007,
          "grnd_level": 999,
          "humidity": 78,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 5.28,
          "deg": 163,
          "gust": 8.36
        },
        "visibility": 10000,
        "pop": 0.12,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-12-13 12:00:00"
      },
      {
        "dt": 1702479600,
        "main": {
          "temp": 16.38,
          "feels_like": 16.24,
          "temp_min": 16.38,
          "temp_max": 16.38,
          "pressure": 1007,
          "sea_level": 1007,
          "grnd_level": 999,
          "humidity": 83,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 4.88,
          "deg": 170,
          "gust": 8.24
        },
        "visibility": 10000,
        "pop": 0.04,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-12-13 15:00:00"
      },
      {
        "dt": 1702490400,
        "main": {
          "temp": 15.23,
          "feels_like": 15.11,
          "temp_min": 15.23,
          "temp_max": 15.23,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 999,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.4,
          "deg": 178,
          "gust": 7.92
        },
        "visibility": 10000,
        "pop": 0.03,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-13 18:00:00"
      },
      {
        "dt": 1702501200,
        "main": {
          "temp": 14.82,
          "feels_like": 14.63,
          "temp_min": 14.82,
          "temp_max": 14.82,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 1000,
          "humidity": 87,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.44,
          "deg": 207,
          "gust": 8.34
        },
        "visibility": 10000,
        "pop": 0.16,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-13 21:00:00"
      },
      {
        "dt": 1702512000,
        "main": {
          "temp": 14.26,
          "feels_like": 13.86,
          "temp_min": 14.26,
          "temp_max": 14.26,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 1000,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.08,
          "deg": 233,
          "gust": 7.04
        },
        "visibility": 10000,
        "pop": 0.38,
        "rain": {
          "3h": 0.11
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-14 00:00:00"
      },
      {
        "dt": 1702522800,
        "main": {
          "temp": 13.51,
          "feels_like": 12.9,
          "temp_min": 13.51,
          "temp_max": 13.51,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 1001,
          "humidity": 76,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.42,
          "deg": 225,
          "gust": 5.6
        },
        "visibility": 10000,
        "pop": 0.3,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-14 03:00:00"
      },
      {
        "dt": 1702533600,
        "main": {
          "temp": 13.09,
          "feels_like": 12.41,
          "temp_min": 13.09,
          "temp_max": 13.09,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 1001,
          "humidity": 75,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.06,
          "deg": 209,
          "gust": 4.26
        },
        "visibility": 10000,
        "pop": 0.07,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-14 06:00:00"
      },
      {
        "dt": 1702544400,
        "main": {
          "temp": 14.35,
          "feels_like": 13.69,
          "temp_min": 14.35,
          "temp_max": 14.35,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1003,
          "humidity": 71,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.22,
          "deg": 206,
          "gust": 6.05
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-12-14 09:00:00"
      },
      {
        "dt": 1702555200,
        "main": {
          "temp": 15.22,
          "feels_like": 14.44,
          "temp_min": 15.22,
          "temp_max": 15.22,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1003,
          "humidity": 63,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.65,
          "deg": 208,
          "gust": 4.93
        },
        "visibility": 10000,
        "pop": 0.08,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-12-14 12:00:00"
      },
      {
        "dt": 1702566000,
        "main": {
          "temp": 14.21,
          "feels_like": 13.49,
          "temp_min": 14.21,
          "temp_max": 14.21,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1003,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.56,
          "deg": 175,
          "gust": 4.36
        },
        "visibility": 10000,
        "pop": 0.14,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-12-14 15:00:00"
      },
      {
        "dt": 1702576800,
        "main": {
          "temp": 12.94,
          "feels_like": 12.25,
          "temp_min": 12.94,
          "temp_max": 12.94,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 1005,
          "humidity": 75,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 1.78,
          "deg": 162,
          "gust": 4.38
        },
        "visibility": 10000,
        "pop": 0.16,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-14 18:00:00"
      },
      {
        "dt": 1702587600,
        "main": {
          "temp": 12.17,
          "feels_like": 11.48,
          "temp_min": 12.17,
          "temp_max": 12.17,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1006,
          "humidity": 78,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 96
        },
        "wind": {
          "speed": 1.56,
          "deg": 158,
          "gust": 3.66
        },
        "visibility": 10000,
        "pop": 0.34,
        "rain": {
          "3h": 0.11
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-14 21:00:00"
      },
      {
        "dt": 1702598400,
        "main": {
          "temp": 11.76,
          "feels_like": 11.08,
          "temp_min": 11.76,
          "temp_max": 11.76,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1007,
          "humidity": 80,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 89
        },
        "wind": {
          "speed": 0.74,
          "deg": 153,
          "gust": 2.94
        },
        "visibility": 10000,
        "pop": 0.31,
        "rain": {
          "3h": 0.16
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-15 00:00:00"
      },
      {
        "dt": 1702609200,
        "main": {
          "temp": 11.7,
          "feels_like": 11.04,
          "temp_min": 11.7,
          "temp_max": 11.7,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1008,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 45
        },
        "wind": {
          "speed": 0.59,
          "deg": 121,
          "gust": 2.37
        },
        "visibility": 10000,
        "pop": 0.33,
        "rain": {
          "3h": 0.12
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-15 03:00:00"
      },
      {
        "dt": 1702620000,
        "main": {
          "temp": 11.28,
          "feels_like": 10.58,
          "temp_min": 11.28,
          "temp_max": 11.28,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1010,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 51
        },
        "wind": {
          "speed": 1.59,
          "deg": 80,
          "gust": 2.5
        },
        "visibility": 10000,
        "pop": 0.28,
        "rain": {
          "3h": 0.17
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-15 06:00:00"
      },
      {
        "dt": 1702630800,
        "main": {
          "temp": 12.91,
          "feels_like": 12.08,
          "temp_min": 12.91,
          "temp_max": 12.91,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1012,
          "humidity": 70,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 18
        },
        "wind": {
          "speed": 2.16,
          "deg": 62,
          "gust": 3.45
        },
        "visibility": 10000,
        "pop": 0.02,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-12-15 09:00:00"
      },
      {
        "dt": 1702641600,
        "main": {
          "temp": 15.02,
          "feels_like": 14.07,
          "temp_min": 15.02,
          "temp_max": 15.02,
          "pressure": 1022,
          "sea_level": 1022,
          "grnd_level": 1013,
          "humidity": 57,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 15
        },
        "wind": {
          "speed": 1.67,
          "deg": 79,
          "gust": 2.73
        },
        "visibility": 10000,
        "pop": 0.02,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-12-15 12:00:00"
      }
    ],
    "city": {
      "id": 3169071,
      "name": "Rome",
      "coord": {
        "lat": 41.9102,
        "lon": 12.3712
      },
      "country": "IT",
      "population": 0,
      "timezone": 3600,
      "sunrise": 1702189624,
      "sunset": 1702222766
    }
  };
  citiesArray:any = [
    [
      {
        "name": "Rome",
        "local_names": {
          "se": "Roma",
          "nn": "Roma",
          "eu": "Erroma",
          "gl": "Roma",
          "es": "Roma",
          "mt": "Ruma",
          "ko": "로마",
          "my": "ရောမမြို့",
          "is": "Róm",
          "la": "Roma",
          "kn": "ರೋಮ",
          "gn": "Róma",
          "sc": "Roma",
          "ln": "Roma",
          "mg": "Roma",
          "rn": "Roma",
          "ht": "Ròm",
          "mi": "Rōma",
          "na": "Roma",
          "bn": "রোম",
          "io": "Roma",
          "mk": "Рим",
          "hu": "Róma",
          "oc": "Roma",
          "so": "Roma",
          "su": "Roma",
          "bg": "Рим",
          "ie": "Roma",
          "sl": "Rim",
          "cu": "Римъ",
          "sd": "روم",
          "ug": "رىم",
          "br": "Roma",
          "fa": "رم",
          "ks": "روم",
          "cs": "Řím",
          "qu": "Roma",
          "sr": "Рим",
          "de": "Rom",
          "sk": "Rím",
          "ro": "Roma",
          "az": "Roma",
          "rm": "Roma",
          "pl": "Rzym",
          "th": "โรม",
          "ku": "Roma",
          "id": "Roma",
          "sv": "Rom",
          "eo": "Romo",
          "kv": "Рим",
          "fy": "Rome",
          "he": "רומא",
          "pt": "Roma",
          "sq": "Roma",
          "no": "Roma",
          "hy": "Հռոմ",
          "uz": "Rim",
          "yi": "רוים",
          "nl": "Rome",
          "uk": "Рим",
          "fo": "Róm",
          "ga": "An Róimh",
          "tl": "Roma",
          "cr": "ᖌᒪ",
          "el": "Ρώμη",
          "si": "රෝමය",
          "ia": "Roma",
          "lt": "Roma",
          "be": "Рым",
          "mr": "रोम",
          "fi": "Rooma",
          "en": "Rome",
          "sg": "Rome",
          "am": "ሮማ",
          "kl": "Roma",
          "ne": "रोम",
          "gv": "Yn Raue",
          "zh": "羅馬/罗马",
          "ba": "Рим",
          "jv": "Roma",
          "ar": "روما",
          "tk": "Rim",
          "hi": "रोम",
          "et": "Rooma",
          "rw": "Roma",
          "mn": "Ром",
          "sw": "Roma",
          "bs": "Rim",
          "sh": "Rim",
          "os": "Ром",
          "ee": "Rome",
          "vo": "Roma",
          "cy": "Rhufain",
          "tg": "Рим",
          "cv": "Рим",
          "kk": "Рим",
          "gd": "An Ròimh",
          "tt": "Рим",
          "yo": "Rómù",
          "ru": "Рим",
          "it": "Roma",
          "af": "Rome",
          "li": "Roeme",
          "tr": "Roma",
          "ka": "რომი",
          "lb": "Roum",
          "ca": "Roma",
          "ty": "Roma",
          "bi": "Rome",
          "ta": "உரோமை நகரம்",
          "te": "రోమ్",
          "vi": "Rô-ma",
          "hr": "Rim",
          "sa": "रोमा",
          "ay": "Roma",
          "an": "Roma",
          "fr": "Rome",
          "ja": "ローマ",
          "da": "Rom",
          "bo": "རོ་མ།",
          "ur": "روم",
          "lv": "Roma",
          "co": "Roma",
          "ml": "റോം"
        },
        "lat": 41.8933203,
        "lon": 12.4829321,
        "country": "IT",
        "state": "Lazio"
      },
      {
        "name": "Roma",
        "lat": 26.4070669,
        "lon": -99.0055462,
        "country": "US",
        "state": "Texas"
      },
      {
        "name": "Roma",
        "lat": -26.5674,
        "lon": 148.78751,
        "country": "AU",
        "state": "Queensland"
      },
      {
        "name": "Roma",
        "local_names": {
          "ro": "Roma",
          "uk": "Рома"
        },
        "lat": 47.836931,
        "lon": 26.6129285,
        "country": "RO"
      },
      {
        "name": "Roma",
        "lat": -31.642912,
        "lon": -60.7255422,
        "country": "AR",
        "state": "Santa Fe"
      }
    ]
  ];
  favouriteCitiesArray:any = [];
  citiesList:boolean = false;
  cities:boolean = false;
  user!:IUserResponse|null;
  chosenCity!:string;
  error!:boolean;
  favouritesError!:boolean;
  loading!:boolean;

  todayMeteo!:any;
  tomorrowMeteo!:any;
  twoDaysMeteo!:any;
  threeDaysMeteo!:any;
  fourDaysMeteo!:any;
  fiveDaysMeteo!:any;

  constructor(
    private meteoService:MeteoService,
    private authService:AuthService,
  ){}

  userSubscription!:Subscription;
  errorSubscription!:Subscription;
  favouritesErrorSubscription!:Subscription;
  loadingSubscription!:Subscription;

  ngOnInit(){
    this.userSubscription = this.authService.user$.subscribe(data => {
      this.user = data;
    });

    this.errorSubscription = this.meteoService.error$.subscribe(data => {
      this.error = data;
    })

    this.favouritesErrorSubscription = this.meteoService.favouritesError$.subscribe(data => {
      this.favouritesError = data;
    })

    this.loadingSubscription = this.meteoService.loading$.subscribe(data => {
      this.loading = data;
    })

    this.getFavourites();
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
    this.errorSubscription.unsubscribe();
    this.favouritesErrorSubscription.unsubscribe();
    this.loadingSubscription.unsubscribe();
  }

  getCities(form:NgForm){
    this.startLoading();
    this.citiesList = true;
    this.meteoService.getCities(form.form.value.city).subscribe(data => {
      this.citiesArray = data;
      for (let i = 0; i < data.length; i++) {
        if (data[i]["local_names"]) {
          if (data[i]["local_names"]["it"]) {
            this.citiesArray[i].name = data[i]["local_names"].it
          };
        }
        if (data[i].state) {
          this.citiesArray[i].string = this.citiesArray[i].name + ", " + this.citiesArray[i].state + ", " + this.citiesArray[i].country;
        } else {
          this.citiesArray[i].string = this.citiesArray[i].name + ", " + this.citiesArray[i].country;
        }
      }
      this.stopLoading();
    })
  }

  getMeteo(lat:number, lon:number, string:string){
    this.citiesList = false;
    this.startLoading();
    this.meteoService.getMeteo(lat, lon).subscribe(data => {
      this.cityMeteo = data;

      this.todayMeteo = this.cityMeteo.list.filter((city:any) => new Date(city["dt_txt"]).getDate() == new Date().getDate());
      this.tomorrowMeteo = this.cityMeteo.list.filter((city:any) => new Date(city["dt_txt"]).getDate() == new Date().getDate() + 1);
      this.twoDaysMeteo = this.cityMeteo.list.filter((city:any) => new Date(city["dt_txt"]).getDate() == new Date().getDate() + 2);
      this.threeDaysMeteo = this.cityMeteo.list.filter((city:any) => new Date(city["dt_txt"]).getDate() == new Date().getDate() + 3);
      this.fourDaysMeteo = this.cityMeteo.list.filter((city:any) => new Date(city["dt_txt"]).getDate() == new Date().getDate() + 4);
      this.fiveDaysMeteo = this.cityMeteo.list.filter((city:any) => new Date(city["dt_txt"]).getDate() == new Date().getDate() + 5);

      this.cities = true;
      this.chosenCity = string;
      this.stopLoading();
    });
  }

  getFavourites():void{
    this.startLoading();
    this.meteoService.getFavourites(this.user?.user.id).subscribe(data => {
      this.favouriteCitiesArray = data;
      this.stopLoading();
    });
  }

  isInFavourites(lat:number, lon:number):boolean{
    const el:any = this.favouriteCitiesArray.find((city:any) => city.lat == lat && city.lon == lon);
    return !!el;
  }

  handleFavourites(lat:number, lon:number):void{
    const el:any = this.favouriteCitiesArray.find((city:any) => city.lat == lat && city.lon == lon)
    if (el) {
      this.removeFromFavourites(el.id);
    } else {
      this.addToFavourites(el["user_id"], lat, lon);
    }
  }

  addToFavourites(userId:number|undefined, lat:number, lon:number){
    this.startLoading();
    this.meteoService.addToFavourites(userId, lat, lon, this.chosenCity).subscribe(data => {
      this.favouriteCitiesArray.push(data);
      this.stopLoading();
    });
  }

  removeFromFavourites(id:number){
    this.startLoading();
    this.meteoService.removeFromFavourites(id).subscribe(data => {
      const index:number = this.favouriteCitiesArray.findIndex((city:any) => city.id == id)
      this.favouriteCitiesArray.splice(index, 1);
      this.stopLoading();
    });
  }

  hour(d:string):string{
    return new Date(d).getHours() + ":00:00";
  }

  day(n:number):string{
    const day:Date = new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * n));
    const date:number = day.getDate();
    const month:number = day.getMonth() + 1;
    const year:number = day.getFullYear();

    return date + "/" + month + "/" + year;
  }

  startLoading():void{
    this.meteoService.startLoading();
  }

  stopLoading():void{
    this.meteoService.stopLoading();
  }
}
