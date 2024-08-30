import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { TodoModel } from '../../models/TodoModel';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  todos: TodoModel[] = [];

  constructor(private todoservice: TodoService) { }
  
  ngOnInit(): void {
    this.todoservice.getTodos().subscribe(todoTemp => {
      this.todos = todoTemp;
    });
  }

  deleteTodo(todoX: TodoModel) {
    this.todoservice.deleteTodoService(todoX).subscribe(
      () => (this.todos = this.todos.filter((t) => t.id !== todoX.id))
    );
    console.log(todoX);
  }

}
