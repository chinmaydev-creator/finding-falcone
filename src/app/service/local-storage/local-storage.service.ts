import { Injectable } from '@angular/core';
import { StorageEncryptionService } from '../storage-encryption/storage-encryption.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private cryptStorageService: StorageEncryptionService) { }

  setJsonValue(key: string, value: any) {
    this.cryptStorageService.secureStorage.setItem(key, value);
  }

  getJsonValue(key: string) {
    return this.cryptStorageService.secureStorage.getItem(key);
  }

  clearToken() {
    this.cryptStorageService.secureStorage.clear();
  }
}
