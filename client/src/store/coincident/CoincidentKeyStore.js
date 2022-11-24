import GlobalSubjectStore from "../GlobalSubjectStore.js";
import { coincidentData, coincidentKeysData } from "../../data/leadingData.js";
import { computed, makeObservable, observable } from "mobx";

export default class CoincidentKeyStore extends GlobalSubjectStore {
  constructor() {
    super();
    this._coincidentKeysData = coincidentKeysData;
    this._gdp = coincidentData.gdp;
    this._tradeBalances = coincidentData.tradeBalances;

    makeObservable(this, {
      _coincidentKeysData: observable,
      _gdp: observable,
      _tradeBalances: observable,
      coincidentKeysData: computed,
      gdp: computed,
      tradeBalances: computed,
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
}
