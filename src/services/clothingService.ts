/**
 * Created by pierre on 16/05/2018.
 */
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {ClothingItem} from '../model/ClothingItem';
import {WeatherType} from '../model/WeatherType';

@Injectable()
export class clothingService {
  clothingItemsAvailable: Array<ClothingItem>;
  constructor() {

    this.clothingItemsAvailable = [];

    //moest je op latere datum andere kleding willen aanraden of toevoegen voor andere weersomstandigheden, kan dit
    //door gewoon een soort kledingstuk toe te voegen aan een soort weer. voorbeelden vind je hieronder.
    this.clothingItemsAvailable.push(new ClothingItem('WinterJas', WeatherType.Snow));
    this.clothingItemsAvailable.push(new ClothingItem('Regenjas', WeatherType.Rain));
    this.clothingItemsAvailable.push(new ClothingItem('T-shirt', WeatherType.Sun));
    this.clothingItemsAvailable.push(new ClothingItem('Jas', WeatherType.Cloudy));
    this.clothingItemsAvailable.push(new ClothingItem('Sweater', WeatherType.Haze));
    this.clothingItemsAvailable.push(new ClothingItem('non-Iron-clothing', WeatherType.Thunderstorm));
    this.clothingItemsAvailable.push(new ClothingItem('waterproof Longsleeve', WeatherType.Drizzle))


  }



  getClothingAccordingToWeather(weatherType: WeatherType): ClothingItem {
    let temp;
   this.clothingItemsAvailable.forEach(function (clothItem) {
     if (clothItem.weatherType === weatherType) {
       temp = clothItem;
     }
   });
   return temp;
  }

}

