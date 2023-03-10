import { Component, forwardRef, Input, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Users } from '../app.model';
import { Option } from '../forms/forms.component';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=>MultiSelectComponent),
    multi: true
  }]
})
export class MultiSelectComponent implements ControlValueAccessor{
  @Input()options: Option<Users>[] | null = null;
  public checkedAll = false;
  public isDisabled = false;
  public placeholder = 'Choose Users';
  private onChange!: (value: Option [])=> void;
  private onTouch!: ()=>void;
  public arrayUsersOut: Set<Option> = new Set();

  select(value: Option): void{
    if(!value.checked){
      value.checked = true;
      this.arrayUsersOut?.add(value);
    }else{
      value.checked = false;
      this.arrayUsersOut?.delete(value);
    }
    this.onChange([...this.arrayUsersOut]);
    console.log(this.options)
  }
  delete(user: Option){
    this.arrayUsersOut.delete(user);
    if(this.options?.find(item=>item === user))
    this.onChange([...this.arrayUsersOut])
    console.log(this.options)
  }
  checkAll(){
    this.options?.forEach(item=>this.arrayUsersOut.add(item));
    if(!this.checkedAll){
      this.checkedAll = true;
      this.arrayUsersOut.forEach(item=>item.checked=true);
    }else{
      this.checkedAll = false;
      this.arrayUsersOut.forEach(item=>item.checked=false);
      this.arrayUsersOut = new Set();
    }
    this.onChange([...this.arrayUsersOut])
  }
  writeValue(value: Option): void {
    if(value) this.arrayUsersOut.add(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
  }



}
