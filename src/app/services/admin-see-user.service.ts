import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import { globalUri } from '../env/env';

const endpoint = globalUri.apiGlobal;

const token = globalUri.token;

var HttpOptions;

if(!token) {
  console.log('No token found');
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
export class AdminSeeUserService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  };

  private handleError<T>(operation = 'operation', result ?: T) {
    return (error: any) : Observable<T> => {
      console.error(error.error);
      console.log(`${operation} failed: ${error.message}`);

      console.log(error.error);
      localStorage.setItem('f28err', error.error.error);

      return of(result as T);
    }
  };

  verifyUser(userId) : Observable<any> {
    return this.http.post<any>(`${endpoint}/admin/verify-user/userId=:userId`, 
    JSON.stringify(userId), HttpOptions).pipe(
      map((_user) => {
        console.log(_user);
      }
    ), catchError(this.handleError<any>('Verify user'))
    );;
  }
}
