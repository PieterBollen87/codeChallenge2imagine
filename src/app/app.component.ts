import { Component } from '@angular/core';
import {WeatherType} from "../model/WeatherType";
import {ClothingItem} from "../model/ClothingItem";
import {Observable} from "rxjs/Observable";
import {weatherService} from "../services/weatherService"
import {clothingService} from "../services/clothingService";
import {TemperatureType} from "../model/TempatureType";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clothingItem: ClothingItem;
  title = 'WeatherApp';
  weatherType: WeatherType;
  temperatureType: TemperatureType
  myLocation: string;
  constructor(private weatherService: weatherService, private clothingService: clothingService) {
    this.myLocation = 'Hasselt';
  }

  private getWeather(): Observable<WeatherType> {
    console.log('in weathergetter');
    return this.weatherService.getWeatherFromApi(this.myLocation).map(result => this.weatherType = result);
  }
  private getClothing() {
    this.getWeather().subscribe(() => {
      this.clothingItem = this.clothingService.getClothingAccordingToWeather(this.weatherType);
    });
  }
}
