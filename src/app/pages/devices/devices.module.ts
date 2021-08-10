import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { DevicesComponent } from './devices.component';
import { DevicesRoutingModule } from './devices-routing.module';
import { ListDevicesComponent } from './list-devices/list-devices.component'



@NgModule({
  declarations: [DevicesComponent, ListDevicesComponent],
  imports: [
    DevicesRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
  ],
  exports: [DevicesComponent, ListDevicesComponent]
})
export class DevicesModule { }
