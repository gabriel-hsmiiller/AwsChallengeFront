import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesModule } from '../categories.module';

import { ListCategoriesComponent } from './list-categories.component';

describe('ListCategoriesComponent', () => {
  let component: ListCategoriesComponent;
  let fixture: ComponentFixture<ListCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCategoriesComponent ],
      imports: [CategoriesModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should load categories when created`, () => {
    component.data$.subscribe(data => {
      expect(data).toBeTruthy();
    });
    fixture.detectChanges();
  });
});
