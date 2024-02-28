import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ITodo } from 'src/app/core/models/todo.model';
import { TodoService } from 'src/app/core/services/todo.service';
import { ITodoStatus, TodoCardComponent } from 'src/app/shared/components/todo-card/todo-card.component';
import { SlidePanelComponent } from 'src/app/shared/ui/slide-panel/slide-panel.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoCardComponent, SlidePanelComponent, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoForm!: FormGroup;
  todos: ITodo[] = [];
  todoStatus = ITodoStatus;
  isSlidePanelOpen: boolean = false;
  constructor(private todoService: TodoService, private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: new FormControl("", [Validators.required, Validators.email]),
      status: new FormControl("", [Validators.required, Validators.email]),
      desc: new FormControl("", [Validators.required, Validators.email]),
    })
  }

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todos = this.todoService.getAllTodo();
  }

  onCloseSlidePanel()
  {
    this.isSlidePanelOpen = false;
  }

  openSlidePanel()
  {
    this.isSlidePanelOpen = true;
  }

  onSubmit()
  {
    if(this.todoForm.valid)
    {

    }else
    {
      this.todoForm.markAllAsTouched();
    }
  }
}

