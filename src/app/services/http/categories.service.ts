import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiData } from 'src/app/models/data';
import { BaseService } from './base/base.service';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends BaseService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getCategories(): Observable<ApiData<Array<Category>>>{
    return super.get<Array<Category>>(`category`);
  }

  public postCategory(category: Category): Observable<ApiData<Category>>{
    return super.post<Category>(`category`, { category });
  }

  public deleteCategory(id: number): Observable<ApiData<Category>>{
    return super.delete<Category>(`category/${id}`);
  }
}
