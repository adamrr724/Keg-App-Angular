import {Component, EventEmitter} from 'angular2/core';
// import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="task-form">
    <h3>Create Task:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <label>Priority</label>
    <select class="form_selects" #newPriority>
      <option value="low" selected="selected">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <label>Category</label>
    <select class="form_selects" #newCategory>
      <option value="home" selected="selected">Home</option>
      <option value="work">Work</option>
      <option value="hobby">Hobby</option>
    </select>
    <button (click)="addTask(newDescription, newPriority, newCategory)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})

export class NewTaskComponent {
  // public onSubmitNewTask: EventEmitter<Task>;
  // constructor(){
  //   this.onSubmitNewTask = new EventEmitter();
  // }
  // addTask(userDescription: HTMLInputElement, userPriority: HTMLSelectElement, userCategory: HTMLSelectElement){
  //   var newTask: Task = new Task(userDescription.value, -1, userPriority.value, userCategory.value);
  //   this.onSubmitNewTask.emit(newTask);
  //   newTask.value = "";
  // }
}
