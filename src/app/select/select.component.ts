import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Option} from "../forms/forms.component";

export type OptionsValue = '';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(()=>SelectComponent)
  }]

})
export class SelectComponent implements ControlValueAccessor {
  @Input()options!: Option [];
  public placeholder = 'Chose auto';
  public viewValue: string | undefined;
  public some!: string;
  private onChange!: (value: string)=>void;
  private onTouched!: ()=>void;
  public isDisabled = false;
  constructor() { }

  select(item: Option) {
    this.onChange(item.value);
    this.viewValue = item.label;
  }
  writeValue(value: string): void{
    this.viewValue = this.options.find((item)=>item.value===value)?.label;
    //console.log(value)
  }

  registerOnChange(fn:(value: string)=>void):void{
    this.onChange = fn;
  }

  registerOnTouched(fn: ()=>void):void{
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean){
    this.isDisabled = isDisabled;
  }
}
