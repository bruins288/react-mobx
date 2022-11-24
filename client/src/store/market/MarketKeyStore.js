import { computed, makeObservable, observable } from "mobx";
import GlobalSubjectStore from "../GlobalSubjectStore.js";
import { marketKeysData, marketData } from "../../data/market/marketData.js";
import Helper from "../../utils/Helper.js";

export default class MarketKeyStore extends GlobalSubjectStore {
  constructor() {
    super();
    this._marketKeysData = marketKeysData;
    this._tReuters_10 = marketData.tReuters_10;
    this._stocks = marketData.stocks;
    this._avgReuters_10Numbers = this.avgReuters_10Numbers;
    this._avgStockNumbers = this.avgStockNumbers;
    makeObservable(this, {
      _tReuters_10: observable,
      _stocks: observable,
      _marketKeysData: observable,
      tReuters_10: computed,
      stocks: computed,
      marketKeysData: computed,
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
  getNameFields(dataStore) {
    let rootFields = Helper.getFieldsName(dataStore).slice(1, 3);
    let childFields = Helper.getFieldsName(dataStore[0][rootFields[1]]).slice(
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
