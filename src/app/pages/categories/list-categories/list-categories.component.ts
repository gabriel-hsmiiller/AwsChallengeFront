import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms'
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Category } from 'src/app/models/category'
import { CategoriesService } from 'src/app/services/http/categories.service';
import { ModalService } from 'src/app/services/utils/modal.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {

  public categoryCols: Array<string> = ['Id','Name'];
  public allCols: Array<string> = [...this.categoryCols, 'Action']
  public data$: Observable<Array<Category>> = null;
  public total: number = 0;

  public categoryControl!: FormControl;

  constructor(
    private modalService: ModalService,
    private categoriesService: CategoriesService, 
    builder: FormBuilder) { 
    this.categoryControl = builder.control('');
  }

  public ngOnInit(): void {
    this.getCategories();
  }

  private getCategories(){
    this.data$ = this.categoriesService.getCategories().pipe(
      tap(api => this.total = api.data.total),
      map(api => api.data.content),
      catchError((error: HttpErrorResponse) => {
        this.modalService.openErrorModal(error);
        throw error;
      })
    );
  }

  public addCategory(){
    if(!!this.categoryControl.value){
      const category: Category = {
        Name: this.categoryControl.value
      }

      this.categoriesService.postCategory(category).subscribe(success => {
        this.getCategories();
        this.categoryControl.reset();
        this.modalService.openSucessModal('Category sucessfully added');
      }, error => {
        this.modalService.openErrorModal(error);
        console.log(error);
      });
    } else {
      this.modalService.openWarnModal('`Name` is required.')
    }
  }

  public removeCategory(id: number){
    this.modalService.openConfirmModal(
      'Do you want to remove this category? This action cannot be undone.',
      () => this.confirmRemoveCategory(id)
    );
  }
  
  private confirmRemoveCategory(id: number){
    this.categoriesService.deleteCategory(id).subscribe(success => {
      this.getCategories();
      this.modalService.openSucessModal('Category sucessfully removed');
    }, (error: HttpErrorResponse) => {
      this.modalService.openErrorModal(error);
      console.log(error);
    });
  }

}
