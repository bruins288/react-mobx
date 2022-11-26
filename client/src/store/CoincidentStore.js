import GlobalSubjectStore from "./GlobalSubjectStore.js";
import { coincidentData, coincidentKeysData } from "../data/coincidentData.js";
import { computed, makeObservable, observable } from "mobx";

export default class CoincidentStore extends GlobalSubjectStore {
  constructor() {
    super();
    this._coincidentKeysData = coincidentKeysData;
    this._gdp = coincidentData.gdp;
    this._tradeBalances = coincidentData.tradeBalances;
    this._retailSales = coincidentData.retailSales;
    this._industrialProductions = coincidentData.industrialProductions;
    this._employments = coincidentData.employments;

    makeObservable(this, {
      _coincidentKeysData: observable,
      _gdp: observable,
      _tradeBalances: observable,
      _retailSales: observable,
      _industrialProductions: observable,
      _employments: observable,
      coincidentKeysData: computed,
      gdp: computed,
      tradeBalances: computed,
      retailSales: computed,
      industrialProductions: computed,
      employments: computed,
    });
  }
  get coincidentKeysData() {
    return this._coincidentKeysData;
  }
  get gdp() {
    return this._gdp;
  }
  get tradeBalances() {
    return this._tradeBalances;
  }
  get retailSales() {
    return this._retailSales;
  }
  get industrialProductions() {
    return this._industrialProductions;
  }
  get employments() {
    return this._employments;
  }
}
