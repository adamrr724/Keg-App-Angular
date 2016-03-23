import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
    outputs: ['onKegPour'],
  template: `
  <div class="well">
    <h3>{{ keg.name }}</h3>
    <h4>ABV: {{ keg.ABV }}%</h4>
    <ul>
      <li *ngFor="#type of keg.type">{{ type }}</li>
    </ul>
    <h4>Price: \${{ keg.price }}</h4>
    <h4>Capacity: {{ keg.pints }}/124</h4>
    <button (click)="kegPour(keg)" name="button">Pour Beer</button>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;
  public onKegPour: EventEmitter<Keg>;
  constructor() {
    this.onKegPour = new EventEmitter();
  }
  kegPour(keg: Keg) {
    if (keg.pints > 0) keg.pints --;
    else alert("Out of Beer!");
    this.onKegPour.emit(keg);
  }
}
