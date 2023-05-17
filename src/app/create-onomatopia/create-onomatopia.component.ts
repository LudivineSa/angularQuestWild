import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent {
  newOnomatopia: string = "";
  @Output() onReceiveNewOnomatopia: EventEmitter<string> = new EventEmitter<string>();

  addOnomatopia(): void {
    if(this.newOnomatopia == "") return;
    console.log(this.newOnomatopia)
    this.onReceiveNewOnomatopia.emit(this.newOnomatopia);
    this.newOnomatopia = "";
  }
}
