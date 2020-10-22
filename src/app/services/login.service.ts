import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import { globalUri } from '../env/env';

const endpoint = globalUri.apiGlobal;

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  };

  private handleError<T>(operation = 'operation', result ?: T) {
    return (error: any) : Observable<T> => {
      console.error(error.error);
      console.log(`${operation} failed: ${error.message}`);

      localStorage.setItem('f28err', error.error.error);

      return of(result as T);
    }
  };

  loginUser(user) : Observable<any> {
    return this.http.post<any>(`${endpoint}/auth/login-user`, JSON.stringify(user), HttpOptions).pipe(
      map((_user) => {
        _user.json();
      }
    ), catchError(this.handleError<any>('Log in'))
    );
  }
};