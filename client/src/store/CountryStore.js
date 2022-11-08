import { makeAutoObservable } from "mobx";
import { StoreContinent } from "../Data/StoreContinent";

export default class Country {
  constructor() {
    this._continent = StoreContinent.Continent;
    makeAutoObservable(this);
  }
  get Continent() {
    return this._continent;
  }
}
