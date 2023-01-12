import { Injectable } from '@angular/core';
const SecureStorage = require('secure-web-storage');
const CryptoJS = require('crypto-js');
const SECRET_KEY = "aSecretParaInsideAngularIsTheKey";

@Injectable({
  providedIn: 'root'
})

export class StorageEncryptionService {

  constructor() { }

  public secureStorage = new SecureStorage(localStorage, {
    hash: (key: any) => {
      key = CryptoJS.SHA256(key, SECRET_KEY);
      return key.toString();
    },
    encrypt: (data: any) => {
      data = CryptoJS.AES.encrypt(data, SECRET_KEY);
      return data.toString();
    },
    decrypt: (data: any) => {
      data = CryptoJS.AES.decrypt(data, SECRET_KEY);
      return data.toString(CryptoJS.enc.Utf8);
    }
  })
}
