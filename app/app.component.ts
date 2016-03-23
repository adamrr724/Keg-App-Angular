import { Component, EventEmitter } from 'angular2/core';
import { Keg } from '../app/keg.model.ts';

@Component({
  selector: 'my-app',
  // directives: [TaskListComponent],
  template: `
    <div class="container">
      <h1>To-Do List</h1>
      <keg-list
        [kegList]="kegs"
        (onTaskSelect)="taskWasSelected($event)">
      </keg-list>
    <div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Two Roads Pale Ale", ["IPA"], 5.5, 5),
      new Keg("Heady Topper IPA", ["IPA"], 6.4, 8),
      new Keg("Widmer Hefeweizen", ["Hefeweizen"], 5.4, 5.50),
      new Keg("Bud Light", ["Light Beer"], 5.5, 4),
      new Keg("Pfriem Belgian Style", ["Belgian", "IPA"], 5.5, 4),
      new Keg("Heater Allen Pilsner", ["Pilsner", "Light Beer"], 5.5, 4),
      new Keg("Breakside IPA Stout", ["IPA", "Stout"], 5.5, 4)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
  }
}
