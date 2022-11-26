import { computed, makeObservable, observable } from "mobx";
import { laggingKeysData, laggingData } from "../data/laggingData.js";
import GlobalSubjectStore from "./GlobalSubjectStore.js";

export default class LaggingStore extends GlobalSubjectStore {
  constructor() {
    super();
    this._laggingKeysData = laggingKeysData;
    this._unemploymentRates = laggingData.unemploymentRates;
    this._inflationRates = laggingData.inflationRates;
    this._producerPrices = laggingData.producerPrices;

    makeObservable(this, {
      _laggingKeysData: observable,
      _unemploymentRates: observable,
      _inflationRates: observable,
      _producerPrices: observable,
      laggingKeysData: computed,
      unemploymentRates: computed,
      inflationRates: computed,
      producerPrices: computed,
    });
  }

  get laggingKeysData() {
    return this._laggingKeysData;
  }
  get unemploymentRates() {
    return this._unemploymentRates;
  }
  get inflationRates() {
    return this._inflationRates;
  }
  get producerPrices() {
    return this._producerPrices;
  }
}
