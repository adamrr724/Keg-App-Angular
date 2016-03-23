import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Create Keg:</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Type" class="col-sm-8 input-lg" #newType>
    <input type="number" step="0.01" placeholder="ABV" class="col-sm-8 input-lg" #newABV>
    <input type="number" placeholder="Price" class="col-sm-8 input-lg" #newPrice>
    <button (click)="addKeg(newName, newType, newABV, newPrice)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(kegName: HTMLInputElement, kegType: HTMLInputElement, kegABV: HTMLInputElement, kegPrice: HTMLInputElement){
    var newKeg: Keg = new Keg(kegName.value, [kegType.value], kegABV.valueAsNumber, kegPrice.valueAsNumber);
    this.onSubmitNewKeg.emit(newKeg);
  }
}
