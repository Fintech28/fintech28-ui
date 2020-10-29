import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { globalUri } from '../env/env';

const endpoint = 'https://fintech28.herokuapp.com/api/v1';

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

export class ViewLoansService {

  constructor(private http: HttpClient) { }

  getLoans() : Observable<any> {
    return this.http.get<any>(`${endpoint}/see-loans`, HttpOptions);
  };

};
