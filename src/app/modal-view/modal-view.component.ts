import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.css']
})
export class ModalViewComponent {
  @Input()posX: string | undefined;

  @Input()posY: string | undefined;

  
}
