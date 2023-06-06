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
    this.todoListService.firestoreCollection.valueChanges({idField: 'id'}).subscribe(item => {
      this.allTask = item.sort((a: any, b: any) => {
        return a.isComplete -b.isComplete;
      });
    });
  }

  onClickEvent(task: HTMLInputElement): void {
    if(!task.value) return;
    this.todoListService.addTodoTask(task.value);
    task.value = '';
  }

  onStatusChange(idTask: string, newStatus: boolean): void {
    this.todoListService.updateStatusTask(idTask, newStatus);
  }

  onRemoveTask(idTask: string): void {
    this.todoListService.deleteTask(idTask);
  }
}
