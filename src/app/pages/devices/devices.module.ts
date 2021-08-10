import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices.component';
import { DevicesRoutingModule } from './devices-routing.module'



@NgModule({
  declarations: [DevicesComponent],
  imports: [
    DevicesRoutingModule,
    CommonModule
  ],
  exports: [DevicesComponent]
})
export class DevicesModule { }
