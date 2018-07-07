import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  urlBase: string = environment.urlBase;

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.urlBase + '/tasks');
  }
}
