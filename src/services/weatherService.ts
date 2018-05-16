/**
 * Created by pierre on 16/05/2018.
 */
import {Injectable} from '@angular/core';
import {WeatherType} from '../model/WeatherType';
import 'rxjs/add/operator/map';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {TemperatureType} from "../model/TempatureType";

@Injectable()
export class weatherService {
  constructor(private http: HttpClient) {

  }

  weatherType: WeatherType;
  weatherTypeName: string;
  tempType: TemperatureType;
  temperatureTypeName: Number;

  getWeatherFromApi(location: string): Observable<WeatherType> {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=cfa3004e760eda6c1a39e7d9f88960d8')
      .map(result => {
        console.log(result);
        this.weatherTypeName = result['weather']['0']['main'];
        switch (this.weatherTypeName) {
          case 'Clouds':
            this.weatherType = WeatherType.Cloudy;
            break;
          case 'Thunderstorm':
            this.weatherType = WeatherType.Thunderstorm;
            break;
            case 'Rain':
            this.weatherType = WeatherType.Rain;
            break;
          case 'Snow':
            this.weatherType = WeatherType.Snow;
            break;
            case 'Haze':
            this.weatherType = WeatherType.Haze;
            break;
          case 'Clear':
            this.weatherType = WeatherType.Sun;
            break;
        }
        this.temperatureTypeName= result['main']['temp'];
        console.log(Number(this.temperatureTypeName));
        this.temperatureTypeName = (Number(this.temperatureTypeName));

        // ik weet dat dit niet de ideale manier is maar een switchcase was beetje moeilijk met vergelijking op waarden en wou het afkrijgen.
          if((Number(this.temperatureTypeName))>=300){
            this.tempType = TemperatureType.Hot;
          }else if(this.temperatureTypeName<300 && this.temperatureTypeName>250){
            this.tempType = TemperatureType.Warm;
        }
        else if(this.temperatureTypeName<250 && this.temperatureTypeName>200){
            this.tempType = TemperatureType.Pleasant;
          }
          else if(this.temperatureTypeName<200 && this.temperatureTypeName<150){
            this.tempType = TemperatureType.Colder;
          }
          else if (this.temperatureTypeName<150 && this.temperatureTypeName>100){
            this.tempType = TemperatureType.Cold;
          }
          else if(this.temperatureTypeName<100){
            this.tempType = TemperatureType.Freezing;
          }

        console.log(TemperatureType[this.tempType]);
        console.log(WeatherType[this.weatherType]);
        //nog return in object voor alles weer te geven, niet toe geraakt. ( van temperatuur).
        return this.weatherType;


      });
  }
}
