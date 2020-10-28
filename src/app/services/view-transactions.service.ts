import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import { globalUri } from '../env/env';

const endpoint = globalUri.apiGlobal;

const token = globalUri.token;

var HttpOptions;

if(!token) {
  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
} else {
  HttpOptions = {
    headers: new HttpHeaders({
      'Authorization': token,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
}

@Injectable({
  providedIn: 'root'
})

export class ViewTransactionsService {

  constructor(private http: HttpClient) { }

  getTransactions() : Observable<any> {
    return this.http.get<any>(`${endpoint}/check-transaction-logs`, HttpOptions);
  };
  
};
