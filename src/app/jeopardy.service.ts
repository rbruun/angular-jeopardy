import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class JeopardyService {

  constructor(private http: Http ) { }

  getRandom(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
  }

  private baseURL: string = 'http://jservice.io/api/';

  getRandomQuestion(): Observable<any>{
    let apiURL = this.baseURL + "random";
    return this.http.get(apiURL)
      .map(this.extractData)
      .catch(this.handleError)
  }

  getRandomCategories(count: number): Observable<any>{
    let apiURL = this.baseURL + "categories?offset=" + this.getRandom(1, 17000) + "&count=" + count;
    return this.http.get(apiURL)
      .map(this.extractData)
      .catch(this.handleError)
  }

  getQuestionByCategory(category: string): Observable<any>{
    let apiURL = this.baseURL + "clues?category=" + category;
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
