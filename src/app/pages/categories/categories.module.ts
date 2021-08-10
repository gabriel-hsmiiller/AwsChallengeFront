import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module'

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CategoriesRoutingModule,
    CommonModule
  ],
  exports: [CategoriesComponent]
})
export class CategoriesModule { }
