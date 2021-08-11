import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Category } from 'src/app/models/category';
import { Device } from 'src/app/models/device';
import { CategoriesService } from 'src/app/services/http/categories.service';
import { DevicesService } from 'src/app/services/http/devices.service'
import { ModalService } from 'src/app/services/utils/modal.service';

@Component({
  selector: 'app-list-devices',
  templateUrl: './list-devices.component.html',
  styleUrls: ['./list-devices.component.scss']
})
export class ListDevicesComponent implements OnInit {

  public deviceCols: Array<string> = ['Id','PartNumber','Color','Category'];
  public formDeviceCols: Array<string> = ['PartNumberForm','ColorForm','CategoryForm'];
  public allFormDeviceCols: Array<string> = [...this.formDeviceCols,'ActionForm'];
  public allCols: Array<string> = [...this.deviceCols, 'Action'];
  public data$: Observable<Array<Device>> = null;
  public categories: Array<Category> = [];
  public total: number = 0;

  public deviceForm!: FormGroup;

  constructor(
    private modalService: ModalService,
    private devicesService: DevicesService,
    private categoriesService: CategoriesService,
    builder: FormBuilder) { 
    this.deviceForm = builder.group({
      PartNumber: [''],
      Color: [''],
      Category: [''],
    });
  }

  public ngOnInit(): void {
    this.getDevices();
    this.getCategories();
  }

  public getDevices(){
    this.data$ = this.devicesService.getDevices().pipe(
      tap(api => this.total = api.data.total),
      map(api => api.data.content),
      catchError((error: HttpErrorResponse) => {
        this.modalService.openErrorModal(error);
        throw error;
      })
    );
  }

  public addDevice(){
    const device = this.deviceForm.value as Device;
    if(/[0-9]+/gm.test(device.Color)){
      this.modalService.openWarnModal('`Color` cannot contain numbers.')
      return;
    }
    if(Math.abs(Number(device.PartNumber)) !== Number(device.PartNumber)){
      this.modalService.openWarnModal('`PartNumber` must be positive')
      return;
    }

    this.devicesService.postDevice(device).subscribe(success => {
      this.getDevices();
      this.deviceForm.reset();
      this.modalService.openSucessModal('Device sucessfully added');
    }, error => {
      this.modalService.openErrorModal(error);
      console.log(error);
    });
  }

  public removeDevice(id: number){
    this.modalService.openConfirmModal(
      'Do you want to remove this device? This action cannot be undone.',
      () => this.confirmRemoveDevice(id)
    );
  }
  
  private confirmRemoveDevice(id: number){
    this.devicesService.deleteDevice(id).subscribe(success => {
      this.getDevices();
      this.modalService.openSucessModal('Device sucessfully removed');
    }, error => {
      this.modalService.openErrorModal(error);
      console.log(error);
    });
  }

  private getCategories(){
    this.categoriesService.getCategories().subscribe(success => {
      this.categories = success.data.content;
    }, error => {
      this.modalService.openErrorModal(error);
      console.log(error);
    });
  }

  public getFormName(name: string): string{
    const index = name.indexOf('Form');
    return name.substring(0,index);
  }

  public getFormValid(): boolean{
    return Object.keys(this.deviceForm.controls).reduce((_,curr) => {
      if(!this.deviceForm.get(curr).value) return false;
      return true;
    }, true);
  }

  public findCategory(id: number): string{
    return this.categories.find(c => c.Id === id)?.Name ?? '';
  }

}
