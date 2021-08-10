import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';
import { Device } from 'src/app/models/device'
import { Observable } from 'rxjs';
import { ApiData } from 'src/app/models/data';

@Injectable({
  providedIn: 'root'
})
export class DevicesService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getDevices(): Observable<ApiData<Device>>{
    return super.get<Device>(`device`);
  }

  public postDevice(device: Device): Observable<ApiData<Device>>{
    return super.post<Device>(`device`, device);
  }

  public deleteDevice(id: number): Observable<ApiData<Device>>{
    return super.delete<Device>(`device/${id}`);
  }
}
