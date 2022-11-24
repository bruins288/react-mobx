import { computed, makeObservable, observable } from "mobx";
import { globalSubjectsData } from "../data/globalSubjectsData.js";
import Helper from "../utils/Helper.js";

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
  getNameFields(dataStore) {
    let rootFields = Helper.getNameFields(dataStore).slice(1, 3);
    let childFields = Helper.getNameFields(dataStore[0][rootFields[1]]).slice(
      1,
      2
    );
    return new Map(
      Object.entries({
        name: rootFields[0],
        rootData: rootFields[1],
        data: childFields[0],
      })
    );
  }
  getLabelGraf(rootData, dataStore) {
    return rootData[this.getNameFields(dataStore).get("rootData")].map((data) =>
      Helper.getMonthYear(data.date)
    );
  }
  getDatasetGraf(rootData, dataStore, isFill, backgroundColor, borderColor) {
    return {
      label: rootData[this.getNameFields(dataStore).get("name")],
      data: [
        ...rootData[this.getNameFields(dataStore).get("rootData")].map(
          (data) => data[this.getNameFields(dataStore).get("data")]
        ),
      ],
      fill: isFill,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
    };
  }
  getDataGraf(countryId, dataStore, isFill, backgroundColor, borderColor) {
    return dataStore
      .filter((rootData) => rootData.countryId === countryId)
      .reduce(
        (acc, rootData) => ({
          labels: [...this.getLabelGraf(rootData, dataStore)],
          datasets: [
            this.getDatasetGraf(
              rootData,
              dataStore,
              isFill,
              backgroundColor,
              borderColor
            ),
          ],
        }),
        {}
      );
  }
}
