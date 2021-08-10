import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon'

import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
