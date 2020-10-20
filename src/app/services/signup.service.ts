import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
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
export class SignupService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  };

  private handleError<T>(operation = 'operation', result ?: T) {
    return (error: any) : Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  };

  createUser(user) : Observable<any> {
    return this.http.post<any>(`${endpoint}/auth/create-user`, JSON.stringify(user), HttpOptions).pipe(
      tap((_user) => {
      }
    ), catchError(this.handleError<any>('Sign up'))
    );
  }
}
