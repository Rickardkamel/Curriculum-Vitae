import { GlobalVariableService } from '../shared/global-variable.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IEmail } from '../shared/email.interface';

@Injectable()
export class ContactService {

  private contactUrl = 'http://rickardkamel.com/email.php';
  private apiUrl = this.globalVariableService.apiUrl;

  header = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: Http,
    private globalVariableService: GlobalVariableService,
  ) { }

  postEmail(mail: IEmail) {

    let body = JSON.stringify(mail);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl + 'api/email', body, { headers: headers})
      .map((response: Response) => response.json());
  }

  postEmailPhP(newMail: IEmail): Observable<string> {
    let body = `name=${newMail.name}&email=${newMail.email}&message=${newMail.message}`;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.contactUrl, body, options)
      .map(res => <string>res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error('Error in sending mail: ' + error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
