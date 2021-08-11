import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnModalComponent } from './warn-modal.component';
import { WarnModalModule } from './warn-modal.module';

describe('WarnModalComponent', () => {
  let component: WarnModalComponent;
  let fixture: ComponentFixture<WarnModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarnModalComponent ],
      imports: [WarnModalModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarnModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
