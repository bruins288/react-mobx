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
        globalSubjects: computed,
        countries: computed,
        countryKeys: computed,
        countriesShortNameKeys: computed,
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
  get countriesShortNameKeys() {
    let keys = new Map();
    this.globalSubjects.forEach((continent) =>
      continent.countries.forEach((country) =>
        keys.set(country.countryShortName, country.id)
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
  getObjectGraf(objectData, labelName, isFill, backgroundColor, borderColor) {
    let grafObject = {
      labels: [...objectData.map((dat) => Helper.getMonthYear(dat.date))],
      datasets: [
        {
          label: labelName,
          data: [
            ...objectData.map(
              (dat) => dat[Helper.getNameFields(objectData).slice(1, 2)]
            ),
          ],
          fill: isFill,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
        },
      ],
    };

    return grafObject;
  }

  getNameIndicatorsByCountryId(countryId, titles, ...indicators) {
    let result = [];
    for (let i = 0; i < indicators.length; i++) {
      indicators[i]
        .filter((current) => current.countryId === countryId)
        .map((current) =>
          result.push({
            id: current.id,
            indicatorName:
              current[Helper.getNameFields(current).slice(1, 2).shift()],
            title: titles[i],
            data: current[Helper.getNameFields(current).slice(2, 3).shift()],
          })
        );
    }
    return result;
  }

  getNameIndicators(...indicators) {
    let result = indicators.shift().map((indicator) => ({
      countryId: indicator.countryId,
      allIndicators: [
        {
          id: indicator.id,
          indicatorName:
            indicator[Helper.getNameFields(indicator).slice(1, 2).shift()],
        },
        ...this.getNameIndicatorsByCountryId(
          indicator.countryId,
          ...indicators
        ),
      ],
    }));
    return result;
  }
}
