import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TaskInterface } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  urlBase: string = environment.urlBase;
  user: string;

  constructor(private http: HttpClient) {
    if (!localStorage.getItem('user-key')){
      localStorage.setItem('user-key', this.generateCode());
    }
    this.user = localStorage.getItem('user-key');
  }

  getList() {
    let params = new HttpParams().set('user', this.user);
    return this.http.get<TaskInterface[]>(this.urlBase + '/tasks', { params: params });
  }

  create(name: String) {
    return this.http.post(this.urlBase + '/tasks', {name: name, user: this.user});
  }

  update(id, data) {
    return this.http.put(this.urlBase + '/tasks/' + id, data);
  }

  delete(id) {
    return this.http.delete(this.urlBase + '/tasks/' + id);
  }

  generateCode() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 32; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
