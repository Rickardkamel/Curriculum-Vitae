import { GlobalVariableService } from '../shared/global-variable.service';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';

@Injectable()
export class ReferencesService {
    header = new Headers({
        'Content-Type': 'application/json'
    });
    private apiUrl = this.globalVariable.apiUrl;

    constructor(
        private http: Http,
        private globalVariable: GlobalVariableService
    ) { }

    getReferences() {
        return this.http.get(this.apiUrl + 'api/reference', { headers: this.header })
        .map((response: Response) => response.json());
    }
}
