import config from "../config";
import { ProductType, UserQuery } from "../types";
import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: config.apiUrl,
  timeout: 15000,
});

const responseBody = (res: AxiosResponse) => res.data;

const requests = {
  get: (url: string, params?: {}) =>
    instance.get(url, params ? { params } : undefined).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Product = {
  getProducts: (params: UserQuery): Promise<ProductType[]> =>
    requests.get("/products", params).then(responseBody),
  getProduct: (id: string): Promise<ProductType> =>
    requests.get("/products/" + id).then(responseBody),
};
