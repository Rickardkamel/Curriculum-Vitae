import { GlobalVariableService } from '../shared/global-variable.service';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class SkillService {
    header = new Headers({
        'Content-Type': 'application/json'
    });
    private apiUrl = this.globalVariable.apiUrl;

    constructor(
        private http: Http,
        private globalVariable: GlobalVariableService
    ) { }

    getSkills() {
        return this.http.get(this.apiUrl + 'api/skills', { headers: this.header })
        .map((response: Response) => response.json());
    }
}
