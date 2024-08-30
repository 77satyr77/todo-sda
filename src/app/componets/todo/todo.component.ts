import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel } from '../../models/TodoModel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { log } from 'console';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() todo!: TodoModel;
  @Output() totoVymazat: EventEmitter<TodoModel> = new EventEmitter;
  faTimes = faTimes;

  onDelete(todoFromDelete: TodoModel) {
    this.totoVymazat.emit(todoFromDelete); 
    console.log(todoFromDelete);
  }
}
