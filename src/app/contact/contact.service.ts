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

    return this.http.post(this.apiUrl + 'api/email', body, { headers: headers })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error('Error in sending mail: ' + error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
