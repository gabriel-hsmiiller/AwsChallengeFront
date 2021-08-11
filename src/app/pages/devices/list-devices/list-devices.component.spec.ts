import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DevicesModule } from '../devices.module';

import { ListDevicesComponent } from './list-devices.component';

describe('ListDevicesComponent', () => {
  let component: ListDevicesComponent;
  let fixture: ComponentFixture<ListDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDevicesComponent ],
      imports: [DevicesModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should load devices when created`, () => {
    component.data$.subscribe(data => {
      expect(data).toBeTruthy();
    });
    fixture.detectChanges();
  });
});
