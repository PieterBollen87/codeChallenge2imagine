import {WeatherType} from "./WeatherType";
/**
 * Created by pierre on 17/05/2018.
 */
export class weatherModel{
  public _description : string;
  public _icon: string;
  public _id: number;
  public _main: WeatherType;
  public _temperature: number;


  constructor(desc:string, icon: string, Id:number, main:WeatherType, temp: number){
    this._description=desc;
    this._icon=icon;
    this._id=Id;
    this._main=main;
    this._temperature = temp;
    }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get main(): WeatherType {
    return this._main;
  }

  set main(value: WeatherType) {
    this._main = value;
  }

  get temperature(): number {
    return this._temperature;
  }

  set temperature(value: number) {
    this._temperature = value;
  }

}
