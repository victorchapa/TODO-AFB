import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../shared/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [
  ]
})
export class TodoListComponent {

  allTask: any[] = [];

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoListService.firestoreCollection.valueChanges().subscribe(item => {
      this.allTask = item;
    });
  }

  onClickEvent(task: HTMLInputElement): void {
    if(!task.value) return;
    this.todoListService.addTodoTask(task.value);
    task.value = '';
  }
}
