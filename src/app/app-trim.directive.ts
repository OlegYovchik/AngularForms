import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appTrim]'
})
export class AppTrimDirective {
  public text: any;

  constructor(){}

  @HostListener('keyup', ['$event.target'])
  public onChange(event: any){
    this.text = (event as HTMLInputElement).value.trim().split('').filter(item=>item!== ' ').join('');
    this.addNewText(this.text);
  }
  @Output() changeText = new EventEmitter();
  
  addNewText(value: string){
    this.changeText.emit(value);
  }
}
