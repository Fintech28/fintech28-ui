import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import { globalUri } from '../env/env';

const endpoint = globalUri.apiGlobal;

const token = globalUri.token;

const HttpOptions = {
  headers: new HttpHeaders({
    'Authorization': token,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getAuthData() : Observable<any> {
    return this.http.get<any>(`${endpoint}/logged-data`, HttpOptions);
  };
};
