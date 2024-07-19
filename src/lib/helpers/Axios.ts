import axios, { type AxiosRequestConfig, type ResponseType } from "axios";

type PartialOptions = Partial<AxiosRequestConfig>;

export abstract class Axios {
  protected url: string;
  protected options: PartialOptions;
  protected responseType: ResponseType;

  constructor(
    url: string,
    options: PartialOptions = {},
    responseType: ResponseType = "json"
  ) {
    this.url = url;
    this.options = options;
    this.responseType = responseType;
  }

  public get() {
    return axios({
      method: "get",
      url: this.url,
      responseType: this.responseType,
    });
  }
}
