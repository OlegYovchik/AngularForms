import {Component, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'app-option',
  template: `<ng-content></ng-content>`
})
export class OptionComponent<T>{
  @Input() value: T | undefined;
  @Output() public selectionChanged = new EventEmitter<OptionComponent<T>>();
  @HostListener('mouseenter')
  onHover(){
    this.host.nativeElement.classList.add('hover');
  };
  @HostListener('mouseleave')
  outHover(){
    this.host.nativeElement.classList.remove('hover');
  };
  @HostListener('click')
  onClick() {
    this.selectionChanged.emit(this);
  };

  constructor(private host: ElementRef) {
  }
  public get valueView(): string {
    return this.host.nativeElement.textContent;
  }
}
