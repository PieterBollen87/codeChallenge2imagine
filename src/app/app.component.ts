import {ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {WeatherType} from "../model/WeatherType";
import {ClothingItem} from "../model/clothingmodels/ClothingItem";
import {Observable} from "rxjs/Observable";
import {weatherService} from "../services/weatherService"
import {clothingService} from "../services/clothingService";
import {TemperatureType} from "../model/TempatureType";
import {weatherModel} from "../model/weatherModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  clothingItem: ClothingItem;
  title = 'WeatherApp';
  weather : weatherModel;
  bgcolor ;
  color : any;
  dataIsavailable: boolean = false;
  blueval: number;
  redval: number;
  weatherType: WeatherType;
  temperatureType: TemperatureType
  myLocation: string;
  myTemp: string;
  dateOftoday: Date;

  constructor(private cd: ChangeDetectorRef, private weatherService : weatherService, private  clothingService: clothingService) {
    this.myLocation = 'Hasselt';
    this.myTemp= '55';
    this.blueval = 255;
    this.redval = 100;
    this.dateOftoday = new Date();
  }

ngOnInit(){
    this.getColor(this.weather);
}
getColor(weather : weatherModel){
  this.blueval = 255;
  this.redval = 0;
    if(this.weather!=undefined) {
      this.blueval = this.blueval-(6.375*weather._temperature);
      this.redval = this.redval+(6.375* weather._temperature);
    }
    return this.color={ redval: this.redval, greenval: 0, blueval:this.blueval }
}

  setColorFromTemp(){
  this.weather.temperature=Number(this.myTemp);
  this.getColor(this.weather);
    // this.redval= (this.redval+(Number(this.myTemp)*6.375));
    // this.color.greenval=0;
    // this.blueval= (this.blueval +(Number(this.myTemp)*6.375));
    // this.color.redval=this.redval;
    // this.color.blueval=this.blueval;

}
  private getWeather(): Observable<weatherModel> {
    return this.weatherService.getWeatherFromApi(this.myLocation).map(result => this.weather = result, this.getColor(this.weather));
  }
  private getClothing() {
    this.getWeather().subscribe(() => {
      this.cd.detectChanges();
      this.clothingItem = this.clothingService.getClothingAccordingToWeather(this.weather);
    });
  }
}
