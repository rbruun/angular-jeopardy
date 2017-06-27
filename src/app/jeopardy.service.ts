import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class JeopardyService {

  constructor(private http: Http ) { }

  private baseURL: string = 'http://jservice.io/api/';

    getRandomQuestion(): Observable<any>{
    let apiURL = this.baseURL + "random";
    return this.http.get(apiURL)
      .map(this.extractData)
      .catch(this.handleError)
  }

  private extractData(res: Response) {
    let results = res.json();
    return results || [];
  }

    private handleError(error: Response | any) {
      // In a real world app, you might use a remote logging infrastructure
      return Observable.throw("Something bad happened in Jeopardy service");
  }

}
