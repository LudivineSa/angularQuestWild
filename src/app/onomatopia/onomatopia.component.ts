import { Component } from '@angular/core';

@Component({
  selector: 'app-onomatopia',
  templateUrl: './onomatopia.component.html',
  styleUrls: ['./onomatopia.component.css']
})

export class OnomatopiaComponent {
  onomatopiaList : string[] = [];
  onReceiveNewOnomatopia(newOnomatopia : string) : void {
    this.onomatopiaList.push(newOnomatopia);
  }
}
