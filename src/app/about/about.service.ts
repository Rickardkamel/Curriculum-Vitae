import { GlobalVariableService } from '../shared/global-variable.service';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';

@Injectable()
export class AboutService {
    header = new Headers({
        'Content-Type': 'application/json'
    });
    private apiUrl = this.globalVariable.apiUrl;

    constructor(
        private http: Http,
        private globalVariable: GlobalVariableService
    ) { }

    getAboutMe() {
        return this.http.get(this.apiUrl + 'api/about/1', { headers: this.header })
            .map((response: Response) => response.json());
    }

    getProjects(){
        return this.http.get(this.apiUrl + 'api/project', { headers: this.header })
        .map((response: Response) => response.json());
    }
}
