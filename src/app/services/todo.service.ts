import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  /* https://jsonplaceholder.typicode.com/todos?_limit=5   limit 5 output */
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todoLimit = '?_limit=5';

  constructor(private http: HttpClient) {}

  /* Observable is asynchronous operation, like promises in JavaScript */
  /* Get Todos */
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todoLimit}`);
  }

  /* Toggle completed todo */
  /* use any object, since the return data is not exact format as Todo, has user ID */
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  /* delete todo item */
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  /* add new todo item */
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
}
