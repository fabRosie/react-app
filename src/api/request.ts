import axios, { AxiosRequestConfig } from "axios";

declare type JsonResponse<T> = {
  data: T;
  code: number;
  msg: string;
};

export const axiosInstance = axios.create({
  baseURL: 'https://gw-api.pinduoduo.com/api/router/',
  // timeoutErrorMessage: 'request timeout',
  // timeout: 12000,
  // headers: {
  //   Authorization: getAuth(),
  // },
})

export const request = async <T = unknown, D = any>(config: AxiosRequestConfig<D>) => {
  return await axiosInstance.request<JsonResponse<T>>(config)
};