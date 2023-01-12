import { TestBed } from '@angular/core/testing';

import { StorageEncryptionService } from './storage-encryption.service';

describe('StorageEncryptionService', () => {
  let service: StorageEncryptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageEncryptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
