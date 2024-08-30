import { Injectable } from '@angular/core';
import { TODOSDATA } from '../mock-data';
import { TodoModel } from '../models/TodoModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = "http://localhost:5000/todosServer";

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoModel[]> {
  return this.http.get<TodoModel[]>(this.apiUrl);
  }

  deleteTodoService(todoD: TodoModel): Observable<TodoModel> {

    const url = `${this.apiUrl}/${todoD.id}`;

    return this.http.delete<TodoModel>(url);
  }
}
