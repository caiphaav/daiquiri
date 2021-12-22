import { Client } from "./client";
import { Data } from "./data";

class _Store {
  client: Client;
  data: Data;
  constructor() {
    this.data = new Data();
    this.client = new Client();
  }

  login = async () => {
    try {
      console.log("login started");
      const response = await this.client.onLogin({
        login: "account33",
        password: "03051996",
      });
      console.log("login ended", response);
    } catch (e) {
      console.log("login failure", e);
    }
  };
}

export const SharedStore = new _Store();
