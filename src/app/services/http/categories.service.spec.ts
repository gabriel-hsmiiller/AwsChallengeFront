import { TestBed } from '@angular/core/testing';

import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${service.getCategories.prototype.name} should get categories when subscribed`, () => {
    service.getCategories().subscribe(success => {
      expect(success.data.content).toBeTruthy();
    })
  });
});
