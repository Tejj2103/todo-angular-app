import { Component, Input, input } from '@angular/core';
import { ITodo } from 'src/app/core/models/todo.model';

export type ITodoType = "OPEN" | "PROGRESS" | "TESTING" | "DONE";
export type ITodoStatus = ["OPEN", "PROGRSS", "TESTING", "DONE"]

@Component({
  selector: 'app-todo-card',
  standalone: true,
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent {
  @Input() type: ITodoType = "OPEN";
  @Input() todo!: ITodo;

}
