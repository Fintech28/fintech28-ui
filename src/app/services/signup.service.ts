import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import{ ActivatedRoute, Router } from '@angular/router';
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
export class SignupService {

  constructor(private http: HttpClient, private router: Router) { }

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

  createUser(user) : Observable<any> {
    return this.http.post<any>(`${endpoint}/auth/create-user`, JSON.stringify(user), HttpOptions).pipe(
      map((_user) => {
        console.log(_user);
        if(_user) localStorage.setItem('f28authkey', _user['data'].token)
        window.location.reload();
        this.router.navigate(['/dashboard']);
      }
    ), catchError(this.handleError<any>('Sign up'))
    );
  };

  getAuthData() : Observable<any> {
    return this.http.get<any>(`${endpoint}/logged-data`, HttpOptions);
  };
};
