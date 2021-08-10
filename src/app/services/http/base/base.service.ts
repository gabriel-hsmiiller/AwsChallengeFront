import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { ApiData } from 'src/app/models/data';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.ApiURL;

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient){ }

  protected get<T>(path: string): Observable<ApiData<T>> {
    return this.http.get<ApiData<T>>(`${API_URL}/${path}`);
  }

  protected post<T>(path: string, body: Object): Observable<ApiData<T>>{
    return this.http.post<ApiData<T>>(`${API_URL}/${path}`, body);
  }

  protected put<T>(path: string, body: T): Observable<ApiData<T>>{
    return this.http.put<ApiData<T>>(`${API_URL}/${path}`, body);
  }

  protected delete<T>(path: string): Observable<ApiData<T>>{
    return this.http.delete<ApiData<T>>(`${API_URL}/${path}`);
  }
}
