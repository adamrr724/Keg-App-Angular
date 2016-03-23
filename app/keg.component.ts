import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
  <div class="well">
    <h3>Beer Name: {{ keg.name }}</h3>
    <h4>ABV: {{ keg.ABV }}</h4>
    <ul>
      <li *ngFor="#type of keg.type">{{ type }}</li>
    </ul>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;
  // toggleDone(setState: boolean){
  //   this.task.done = setState;
  // }
}
