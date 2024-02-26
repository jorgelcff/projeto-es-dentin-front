import QueryString from "qs";
import { AxiosInstance } from "axios";

import { HttpHandle } from "../HttpHandle";

export class GenericService<T> {
  private httpHandle = HttpHandle.getInstance();
  private uri: string = "";

  protected getLink(resourceName?: string): string {
    return this.uri + (!!resourceName ? `/${resourceName}` : ``);
  }

  public async get(resourceName?: string, params?: any): Promise<T[]> {
    const _instance: AxiosInstance = this.httpHandle.getAxios();
    const _uri: string = this.getLink(resourceName);
    if (!!params) {
      return _instance.get(_uri, {
        params,
        paramsSerializer: (params: any) => QueryString.stringify(params),
      });
    } else {
      return _instance.get(_uri);
    }
  }

  public async post(resourceName: string, body: any): Promise<T | void> {
    const _uri: string = this.getLink(resourceName);
    return this.httpHandle.getAxios().post(_uri, body);
  }

  public async put(body: any): Promise<T | void> {
    return this.httpHandle.getAxios().put(this.uri, body);
  }

  public async delete(id: number): Promise<T | void> {
    return this.httpHandle.getAxios().delete(`${this.uri}/${id}`);
  }

  protected setUri(uri: string) {
    this.uri = uri;
  }

}
