import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = true;
    this._user = {};
    makeAutoObservable(this);
  }
  set isAuth(isAuth) {
    this._isAuth = isAuth;
  }
  setUser(user) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}
