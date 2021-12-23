export type IEndpoint = "login";

export interface INews {
  id: string;
  title: string;
  date: string;
  description: string;
  thumbnail: string;
  route: string;
}

export interface IR2Item {
  src: string;
  title: string;
}
