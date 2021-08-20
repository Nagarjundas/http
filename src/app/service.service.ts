import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseUrl: string = 'https://api.thedogapi.com/v1/images/search';
  
  constructor(private http: HttpClient) {}

  getImage() {
    return this.http.get(this.baseUrl);
  }
}
