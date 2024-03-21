import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";
import { Auth } from "../models/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class HttpHandle {
  private static instance: HttpHandle;
  protected axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      //baseURL: "https://dummyjson.com/",
      baseURL: "https://dentin.fly.dev",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setInterceptor();
  }

  public static getInstance() {
    if (!HttpHandle.instance) {
      HttpHandle.instance = new HttpHandle();
    }

    return HttpHandle.instance;
  }

  public getAxios() {
    return this.axios;
  }

  /**
   * Configura interceptors
   */
  private setInterceptor(): void {
    this.axios.interceptors.request.use(
      async (config: any) => {
        const item = await AsyncStorage.getItem("userData");
        const authToken = `Bearer ${item}`;

        if (item) {
          config.headers = {
            ...config.headers,
            Authorization: authToken,
          };
        }
        return config;
      },
      (err: AxiosError) => {
        return err;
      }
    );

    this.axios.interceptors.response.use(
      (response: any) => {
        if (response.config.url?.includes("login")) {
          return Promise.resolve({
            token: response.headers.authorization,
          });
        }

        return response;
      },
      (err: any) => {
        return Promise.reject(err);
      }
    );
  }
}
