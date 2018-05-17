/**
 * Created by pierre on 16/05/2018.
 */
import {WeatherType} from '../WeatherType';
export class ClothingItem {
  public name: string;
  public weatherType: WeatherType;

  constructor(name, weatherType) {
    this.name = name;
    this.weatherType = weatherType;
  }
}
