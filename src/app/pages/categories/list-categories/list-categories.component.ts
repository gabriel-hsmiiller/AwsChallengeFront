import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Category } from 'src/app/models/category'
import { CategoriesService } from 'src/app/services/http/categories.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {

  categoryCols: Array<string> = ['Id','Name'];
  allCols: Array<string> = [...this.categoryCols, 'Action']
  data$: Observable<Array<Category>> = null;
  total: number = 0;

  categoryControl!: FormControl;

  constructor(
    private dialog: MatDialog,
    private categoriesService: CategoriesService, 
    builder: FormBuilder) { 
    this.categoryControl = builder.control('');
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.data$ = this.categoriesService.getCategories().pipe(
      tap(api => this.total = api.data.total),
      map(api => api.data.content),
    )
  }

  addCategory(){
    if(!!this.categoryControl.value){
      const category: Category = {
        Name: this.categoryControl.value
      }

      this.categoriesService.postCategory(category).subscribe(success => {
        this.getCategories();
        this.categoryControl.reset();
      }, error => {
        console.log(error);
      })
    }
  }

  removeCategory(id: number){
    this.categoriesService.deleteCategory(id).subscribe(success => {
      this.getCategories();
    }, error => {
      console.log(error);
    })
  }

}
