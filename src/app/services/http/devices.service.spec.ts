import { TestBed } from '@angular/core/testing';

import { DevicesService } from './devices.service';

describe('DevicesService', () => {
  let service: DevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it(`#${service.getDevices.prototype.name} should get devices when subscribed`, () => {
    service.getDevices().subscribe(success => {
      expect(success.data.content).toBeTruthy();
    })
  });
});
