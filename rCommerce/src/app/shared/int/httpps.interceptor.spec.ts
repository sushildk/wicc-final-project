import { TestBed } from '@angular/core/testing';

import { HttppsInterceptor } from './httpps.interceptor';

describe('HttppsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttppsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttppsInterceptor = TestBed.inject(HttppsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
