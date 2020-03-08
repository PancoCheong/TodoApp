import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    /* must subscribe to Observable as it is asynchronized operation */
    /* Observable is an asynchronous data stream, subscribe is like listening to the changes  */
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    /* Remove from UI, return items that are not deleted */
    this.todos = this.todos.filter(item => item.id !== todo.id);
    /* Remove from Server */
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo); /* add new todo to array */
    });
  }
}
