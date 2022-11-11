import { makeAutoObservable } from "mobx";
import { DataContinent } from "../Data/DataContinent.js";

export default class CountryStore {
  constructor() {
    this._continent = DataContinent.Continent;
    makeAutoObservable(this);
  }
  get Continent() {
    return this._continent;
  }
}
