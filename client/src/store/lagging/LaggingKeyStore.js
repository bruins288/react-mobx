import { computed, makeObservable, observable } from "mobx";
import { laggingKeysData, laggingData } from "../../data/laggingData.js";
import GlobalSubjectStore from "../GlobalSubjectStore.js";

export default class LaggingKeyStore extends GlobalSubjectStore {
  constructor() {
    super();
    this._laggingKeysData = laggingKeysData;
    this._unemploymentRates = laggingData.unemploymentRates;
    this._inflationRates = laggingData.inflationRates;

    makeObservable(this, {
      _laggingKeysData: observable,
      _unemploymentRates: observable,
      _inflationRates: observable,
      laggingKeysData: computed,
      unemploymentRates: computed,
      inflationRates: computed,
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
}
