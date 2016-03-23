import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import {LowPipe} from './low.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [LowPipe],
  directives: [KegComponent, NewKegComponent, EditKegDetailsComponent],
  template:
    `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="none" selected="selected">Show All</option>
      <option value="full">Freshly Tapped</option>
      <option value="notLow">Not Low</option>
      <option value="low">Low Kegs</option>
    </select>
    <ul>
      <keg-display
        *ngFor="#currentKeg of kegList | low:filterLow"
        (click)="kegClicked(currentKeg)"
        [class.selected]="currentKeg === selectedKeg"
        [keg]= "currentKeg"
        (onKegPour)="refreshKeg($event)">
        </keg-display>
    </ul>
    <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg"
    (onEditKeg)="refreshKeg($event)">
    // </edit-keg-details>
    <br>
    <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
    `


  // <task-display *ngFor="#currentTask of taskList | done:filterDone"
  //   (click)="taskClicked(currentTask)"
  //   [class.selected]="currentTask === selectedTask"
  //   [task]="currentTask">
  // </task-display>
  // <edit-task-details *ngIf="selectedTask" [task]="selectedTask">
  // </edit-task-details>
  // <new-task (onSubmitNewTask)="createTask($event)"></new-task>
  // `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterLow: string = "notLow";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  refreshKeg(newKeg: Keg) {
    // console.log("event received and refreshKeg run");
    // console.log("New Keg is", newKeg);
    for(var keg of this.kegList) {
      if (keg.name === newKeg.name) {
        keg.type = newKeg.type;
        keg.ABV = newKeg.ABV;
        keg.price = newKeg.price;
        keg.pints = newKeg.pints;
        // console.log("The edited keg is ", keg);
      }
    }
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    // this.onKegSelect.emit(clickedKeg);
  }
  createKeg(newKeg: Keg): void {
    console.log(newKeg);
    this.kegList.push(
      new Keg(newKeg.name, newKeg.type, newKeg.ABV, newKeg.price)
    );
  }
  onChange(filterOption) {
    this.filterLow = filterOption;
  }
}
