import { makeAutoObservable } from "mobx";

export class Data {
  username: string;

  constructor() {
    this.username = "";
    makeAutoObservable(this);
  }

  setUserName = (username: string) => {
    this.username = username;
  };

  get hasUser() {
    return this.username !== "";
  }
}
