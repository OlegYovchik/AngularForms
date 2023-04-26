import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=>CheckboxGroupComponent),
    multi: true
  }]
})
export class CheckboxGroupComponent implements ControlValueAccessor{
  @Input() options: string[] | undefined;
  public valueOptions: string [] = [];
  public checked: string [] = [];
  private onChange!: ((value: string [])=>void);
  private onTouched!: (()=>void);
  constructor() {
  }
  check(value: string){
    if(this.valueOptions.includes(value)){
      this.valueOptions = this.valueOptions.filter(item => item !== value);
    }else{
      this.valueOptions.push(value);
    }
    if(this.valueOptions) this.onChange(this.valueOptions);
  }
  writeValue(value: string [] | null){
    if(value===null){this.valueOptions = []}else{
      this.valueOptions = value;
    }
  }
  registerOnChange(fn: any){
    this.onChange = fn;
  }
  registerOnTouched(fn: any){
    this.onTouched = fn;
  };
  setDisabledState?(isDisabled: boolean): void;
}
