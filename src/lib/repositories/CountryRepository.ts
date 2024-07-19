import { Axios } from "$lib/helpers/Axios";
import type { AxiosRequestConfig } from "axios";

export class CountryRequest extends Axios {
  constructor(url: string, options: Partial<AxiosRequestConfig>) {
    super(url, options);
  }

  public async fetchCountries() {
    try {
      const response = await this.get();

      return response;
    } catch (error) {
      console.error("Erro ao buscar países:", error);
    }
  }
}
