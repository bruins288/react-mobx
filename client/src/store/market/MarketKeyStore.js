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
  buildGrafReuters_10(countryId) {
    return this.tReuters_10
      .filter((reuters) => reuters.countryId === countryId)
      .reduce(
        (acc, reuters) => ({
          labels: [
            ...reuters.tReuters_10Data.map((dataReuters) =>
              Helper.getMonthYear(dataReuters.date)
            ),
          ],
          datasets: [
            {
              label: reuters.tReutersName,
              data: [
                ...reuters.tReuters_10Data.map(
                  (dataReuters) => dataReuters.tr_10
                ),
              ],
              fill: true,
              backgroundColor: "rgba(6, 156,51, .3)",
              borderColor: "#02b844",
            },
          ],
        }),
        {}
      );
  }
  buildGrafStock(countryId) {
    return this.stocks
      .filter((stock) => stock.countryId === countryId)
      .reduce(
        (acc, stock) => ({
          labels: [
            ...stock.stockData.map((dataStock) =>
              Helper.getMonthYear(dataStock.date)
            ),
          ],
          datasets: [
            {
              label: stock.stockName,
              data: [...stock.stockData.map((dataStock) => dataStock.stock)],
              fill: true,
              backgroundColor: "rgba(27, 193, 210, 0.3)",
              borderColor: "#02acb8",
            },
          ],
        }),
        {}
      );
  }
}
