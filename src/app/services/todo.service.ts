import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';


@Injectable()
export class TodoService {
    constructor( private http: HttpClient) { }
    getTodos(): Observable<any> {
        const url = environment.baseURL;
        return this.http.get(url);
    }
}