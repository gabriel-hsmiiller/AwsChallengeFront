import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { WarnModalComponent } from './warn-modal.component';



@NgModule({
  declarations: [WarnModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [WarnModalComponent]
})
export class WarnModalModule { }
