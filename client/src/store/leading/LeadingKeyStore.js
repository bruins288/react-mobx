import { computed, makeObservable, observable } from "mobx";
import { leadingData, leadingKeysData } from "../../data/leadingData.js";
import GlobalSubjectStore from "../GlobalSubjectStore.js";

export default class LeadingKeyStore extends GlobalSubjectStore {
  constructor() {
    super();
    this._leadingKeysData = leadingKeysData;
    this._manufacturing = leadingData.manufacturing;
    this._services = leadingData.services;

    makeObservable(this, {
      _leadingKeysData: observable,
      _manufacturing: observable,
      _services: observable,
      leadingKeysData: computed,
      manufacturing: computed,
      services: computed,
    });
  }
  get leadingKeysData() {
    return this._leadingKeysData;
  }
  get manufacturing() {
    return this._manufacturingPMI;
  }
  get services() {
    return this._services;
  }
}
