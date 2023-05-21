import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-battleship',
  templateUrl: './battleship.component.html',
  styleUrls: ['./battleship.component.css']
})
export class BattleshipComponent {
  public thirdShip = {x:3, y:5};
  constructor(private el: ElementRef) {
  }
  info(id: number, idx: number, event: Event){
    console.log(id,idx, event);
  }
}
