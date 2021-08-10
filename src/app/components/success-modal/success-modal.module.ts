import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SuccessModalComponent } from './success-modal.component';



@NgModule({
  declarations: [SuccessModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [SuccessModalComponent],
})
export class SuccessModalModule { }
