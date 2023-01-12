import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) { }

  /* Navigates to a given url */
  goToPage(url: string) {
    window.open(url);
  }

  /* Gets data for given url */
  get(url: string) {
    return this.http.get(url);
  }

  /* Gets data via POST method for given url and body */
  post(url: string, body: any, headers: any) {
    return this.http.post(url, body, { headers});
  }
}
