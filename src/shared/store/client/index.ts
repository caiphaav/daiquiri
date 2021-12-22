import { makeAutoObservable } from "mobx";

export class Client {
  constructor() {
    makeAutoObservable(this);
  }

  onFetch = async <T>(endpoint: string, params?: Object): Promise<T> => {
    const url = new URL(`${endpoint}`);
    params &&
      Object.keys(params).forEach((key) =>
        //@ts-ignore
        url.searchParams.append(key, params[key])
      );
    const response = await fetch(url.href)
      .then((response) => response.json())
      .then((data: T) => data);
    return response;
  };

  onLogin = async (data: { login: string; password: string }) => {
    await fetch("https://daiquiri.nonrp.nl/lk/login.php", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => data);
  };
}
