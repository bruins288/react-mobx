import { computed, makeObservable, observable } from "mobx";
import { leadingData, leadingKeysData } from "../data/leadingData.js";
import GlobalSubjectStore from "./GlobalSubjectStore.js";

export default class LeadingStore extends GlobalSubjectStore {
  constructor() {
    super();
    this._leadingKeysData = leadingKeysData;
    this._manufacturing = leadingData.manufacturing;
    this._services = leadingData.services;
    this._orders = leadingData.orders;

    makeObservable(this, {
      _leadingKeysData: observable,
      _manufacturing: observable,
      _services: observable,
      _orders: observable,
      leadingKeysData: computed,
      manufacturing: computed,
      services: computed,
      orders: computed,
    });
  }
  get leadingKeysData() {
    return this._leadingKeysData;
  }
  get manufacturing() {
    return this._manufacturing;
  }
  get services() {
    return this._services;
  }
  get orders() {
    return this._orders;
  }
}
