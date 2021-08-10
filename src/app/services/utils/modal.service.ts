import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ConfirmModalComponent } from 'src/app/components/confirm-modal/confirm-modal.component';
import { ErrorModalComponent } from 'src/app/components/error-modal/error-modal.component';
import { SuccessModalComponent } from 'src/app/components/success-modal/success-modal.component';
import { WarnModalComponent } from 'src/app/components/warn-modal/warn-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  public openErrorModal(error: HttpErrorResponse){
    this.dialog.open(ErrorModalComponent, {
      data: {
        status: error.status,
        message: error.error.message || error.message
      },
      width: '50%',
    });
  }

  public openConfirmModal(message: string, callback: Function){
    const ref = this.dialog.open(ConfirmModalComponent, {
      data: {
        message: message,
        confirmCallback: () => {
          callback();
          ref.close();
        }
      },
      width: '50%',
    });
  }

  public openSucessModal(message: string){
    this.dialog.open(SuccessModalComponent, {
      data: {
        message
      },
    });
  }

  public openWarnModal(message: string){
    this.dialog.open(WarnModalComponent, {
      data: {
        message
      },
    });
  }
}
