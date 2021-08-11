import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${service.openConfirmModal.prototype.name} should open ConfirmModalComponent when called`, () => {
    const modalRef = service.openConfirmModal('', () => {});
    expect(modalRef).toBeTruthy();
  });

  it(`#${service.openConfirmModal.prototype.name} should activate callback when confirm`, () => {
    const callBack = () => {
      expect(true).toBeTrue();
    }
    const modalRef = service.openConfirmModal('', () => callBack());
    modalRef.componentInstance.data.confirmCallback();
  });

  it(`#${service.openErrorModal.prototype.name} should open ErrorModalComponent when called`, () => {
    const modalRef = service.openErrorModal(new HttpErrorResponse({}));
    expect(modalRef).toBeTruthy();
  });

  it(`#${service.openSucessModal.prototype.name} should open SuccessModalComponent when called`, () => {
    const modalRef = service.openSucessModal('');
    expect(modalRef).toBeTruthy();
  });

  it(`#${service.openWarnModal.prototype.name} should open WarnModalComponent when called`, () => {
    const modalRef = service.openWarnModal('');
    expect(modalRef).toBeTruthy();
  });

});
