import { Directive, forwardRef, Input, TemplateRef } from '@angular/core';

export abstract class CustomCell {
  public appCustomCell = '';
  public tmpRef: TemplateRef<unknown> | unknown;
}

@Directive({
  selector: '[appCustomCell]',
  providers: [
    {
      provide: CustomCell,
      useExisting: forwardRef(() => CustomCellDirective)
    }
  ]
})
export class CustomCellDirective {
  @Input() public appCustomCell = '';

  constructor(public tmpRef: TemplateRef<unknown>) {
  }

}

