import { computed, makeObservable, observable } from "mobx";
import { marketKeysData, marketData } from "../data/marketData.js";
import GlobalSubjectStore from "./GlobalSubjectStore.js";

export default class MarketStore extends GlobalSubjectStore {
  constructor() {
    super();
    this._marketKeysData = marketKeysData;
    this._tReuters_10 = marketData.tReuters_10;
    this._stocks = marketData.stocks;
    this._rates = marketData.rates;
    this._YR_10 = marketData.YR_10;
    this._YR_2 = marketData.YR_2;
    this._resources = marketData.resources;
    this._avgReuters_10Numbers = this.avgReuters_10Numbers;
    this._avgStockNumbers = this.avgStockNumbers;
    makeObservable(this, {
      _marketKeysData: observable,
      _tReuters_10: observable,
      _stocks: observable,
      _rates: observable,
      _YR_10: observable,
      _YR_2: observable,
      _resources: observable,
      marketKeysData: computed,
      tReuters_10: computed,
      stocks: computed,
      rates: computed,
      YR_10: computed,
      YR_2: computed,
      resources: computed,
      avgStockNumbers: computed,
      avgReuters_10Numbers: computed,
    });
  }
  get marketKeysData() {
    return this._marketKeysData;
  }
  get tReuters_10() {
    return this._tReuters_10;
  }
  get stocks() {
    return this._stocks;
  }
  get rates() {
    return this._rates;
  }
  get YR_10() {
    return this._YR_10;
  }
  get YR_2() {
    return this._YR_2;
  }
  get resources() {
    return this._resources;
  }
  get avgReuters_10Numbers() {
    let avgKeyNumbers = new Map();
    let avgForReuters_10 = this.tReuters_10.map((data) => ({
      id: data.countryId,
      avgNumber:
        data.tReuters_10Data.reduce((avg, data) => avg + data.tr_10, 0) /
        data.tReuters_10Data.length,
    }));
    avgForReuters_10.forEach((data) =>
      avgKeyNumbers.set(data.id, data.avgNumber.toFixed(3))
    );
    return avgKeyNumbers;
  }
  get avgStockNumbers() {
    let avgKeyNumbers = new Map();
    let avgForStocks = this.stocks.map((data) => ({
      id: data.countryId,
      avgNumber:
        data.stockData.reduce((avg, data) => avg + data.stock, 0) /
        data.stockData.length,
    }));
    avgForStocks.forEach((data) =>
      avgKeyNumbers.set(data.id, data.avgNumber.toFixed(2))
    );
    return avgKeyNumbers;
  }
  getAvgReuters_10NumbersById(id) {
    return this._avgReuters_10Numbers.get(id);
  }
  getAvgStockNumbersById(id) {
    return this._avgStockNumbers.get(id);
  }
}
