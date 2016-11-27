import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers, RequestOptions} from '@angular/http';
import {Employee} from '../models/employee.model';

import {Observable} from 'rxjs';
// import 'rxjs/Rx';
// import {Observable} from 'rxjs/Observable';

@Injectable()
export class FormPoster {

  constructor(
    private http: Http
  ) {}

  private extractData(res: Response) {
    // console.log(res);
    let body = res.json();
    return body.data || {};
  }

  private extractLanguages(res: Response): string {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    console.error(`POST error: `, error);
    return Observable.throw(error.statusText);
  }

  getLanguages(): Observable<any> {
    const API_URI = `http://localhost:3100/api/employee/get-language`;
    return this.http.get(API_URI)
      // .delay(5000)
      .map(this.extractLanguages)
      .catch(this.handleError);
  }

  postEmployeeForm(employee: Employee): Observable<any> {
    let body = JSON.stringify(employee);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers: headers});

    const API_URL = `http://localhost:3100/api/employee`;
    return this.http.post(API_URL, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
