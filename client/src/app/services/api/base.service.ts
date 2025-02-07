import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {API_URL} from "../../injection-token";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private baseUrl = inject(API_URL);
  private httpClient = inject(HttpClient);


  get(endpoint: string, params?: Record<string, any>) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        httpParams = httpParams.set(key, params[key]);
      });
    }
    return this.httpClient.get(`${this.baseUrl}${endpoint}`, {params: httpParams});
  }

  post(endpoint: string, data?: any, params?: Record<string, any>) {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        httpParams = httpParams.set(key, params[key]);
      });
    }
    return this.httpClient.post(`${this.baseUrl}${endpoint}`, data, {params: httpParams});
  }
}
