import { computed, makeObservable, observable } from "mobx";
import { globalSubjectsData } from "../data/globalSubjectsData.js";

export default class GlobalSubjectStore {
  constructor() {
    this._globalSubjects = globalSubjectsData.continents;
    this._countries = this.countries;
    this._countryKeys = this.countryKeys;
    makeObservable(
      this,
      {
        _globalSubjects: observable,
        countries: computed,
        countryKeys: computed,
      },
      { autoBind: true }
    );
  }
  get globalSubjects() {
    return this._globalSubjects;
  }
  get countries() {
    return this._globalSubjects.reduce(
      (acc, continent) => [...acc, ...continent.countries],
      []
    );
  }
  get countryKeys() {
    let keys = new Map();
    this.globalSubjects.forEach((continent) =>
      continent.countries.forEach((country) =>
        keys.set(country.id, country.countryName)
      )
    );
    return keys;
  }
  getCountryKeyById(id) {
    return this._countryKeys.get(id);
  }
}
