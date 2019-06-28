import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private http: HttpClient) { }
  
  // RESTful API  and HTTP headers
  EXCHANGE_API = 'http://data.fixer.io/api/latest?access_key=0e82e246500e79435b1d3aa892835d1b&symbols=CAD,USD,EUR&format=1';
  /*EXCHANGE_API = 'http://data.fixer.io/api/latest?access_key=052ed2a09fe56cae04ebe56831ca960f&symbols=CAD,USD,EUR&format=1';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };*/
  private extractData(res: Response) {
    let body = res;
    return body || {};
  };

  getRates(): Observable<any> {
    return this.http.get(this.EXCHANGE_API).pipe(
      map(this.extractData));
  }
}
