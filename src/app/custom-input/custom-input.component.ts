import { AfterViewInit, Component, Input, forwardRef } from '@angular/core';
import { ItemError } from '../app.model';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FetchItemsService } from '../fetch-items.service';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=>CustomInputComponent),
    multi: true
  }]
})
export class CustomInputComponent implements ControlValueAccessor {
  public error = '';
  public valueInp = '';
  public arrCars = ['opel','kia'];
  @Input() inputName = '';

  constructor(private fetchItems: FetchItemsService){}

  onChange!: (val: string)=>void;
  onTouched!: ()=>void;

  onInput(event: any){
    this.valueInp = event.target.value;
    this.onChange(event.target.value);
    this.fetchItems.setAll();
  }

  writeValue(value: string): void {
    this.valueInp = value;
  }

  registerOnChange(fn: (value: string)=>void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  fetchData(){
    if(this.arrCars.includes(this.valueInp.toLowerCase())){
      this.error = this.valueInp
    }else{this.error = ''}
  }
}
