import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class MainService {
  readonly url = 'https://jsonplaceholder.typicode.com/comments'
  constructor(private http: Http) { }

  postData(data) {
    return this.http.post(this.url, data).toPromise()
      .then(this.succesAdd)
      .catch(this.handleError);
  }
  succesAdd(res: Response) {
    return res;
  }

  private handleError(error: any) {
    return error;
  }

}
