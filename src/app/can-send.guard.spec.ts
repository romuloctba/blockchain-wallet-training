import { TestBed, async, inject } from '@angular/core/testing';

import { CanSendGuard } from './can-send.guard';

describe('CanSendGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanSendGuard]
    });
  });

  it('should ...', inject([CanSendGuard], (guard: CanSendGuard) => {
    expect(guard).toBeTruthy();
  }));
});
