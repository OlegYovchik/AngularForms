import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { User } from '../app.model';
import { Option } from '../app.model';

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
  @Input()options: Option<User>[] | null = null;
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
      this.checkedAll = false;
    }
    this.onChange([...this.arrayUsersOut]);
  }
  delete(user: Option){
    this.arrayUsersOut.delete(user);
    let item = this.options?.find(item=>item === user);
    delete item?.checked;
    this.onChange([...this.arrayUsersOut])
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
