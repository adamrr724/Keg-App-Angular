import { Component } from 'angular2/core';
import { Task } from './task.model';

@Component({
    selector: 'task-display',
    inputs: ['task'],
  template: `
  <div>
    <input *ngIf="task.done" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="!task.done" type="checkbox" (click)="toggleDone(true)"/>
    <label *ngIf='task.priority === "low"' class="low_priority">{{ task.description }}</label>
    <label *ngIf='task.priority === "medium"' class="medium_priority">{{ task.description }}</label>
    <label *ngIf='task.priority === "high"' class="high_priority">{{ task.description }}</label>
    <ul>
      <li>Priority: {{ task.priority }}</li>
      <li>Category: {{ task.category}}</li>
    </ul>
  </div>
  `
})
export class TaskComponent {
  public task: Task;
  toggleDone(setState: boolean){
    this.task.done = setState;
  }
}
