import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TaskInterface } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  urlBase: string = environment.urlBase;

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<TaskInterface[]>(this.urlBase + '/tasks');
  }

  create(name: String) {
    return this.http.post(this.urlBase + '/tasks', {name: name});
  }

  delete(id) {
    return this.http.delete(this.urlBase + '/tasks/' + id);
  }
}
