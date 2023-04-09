import {AfterViewInit, Component, ContentChildren, forwardRef, Input, QueryList, TemplateRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {OptionComponent} from "../option/option.component";
import {map, merge, startWith, switchMap} from "rxjs";

@Component({
  selector: 'app-select-by',
  templateUrl: './select-by.component.html',
  styleUrls: ['./select-by.component.css'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(()=>SelectByComponent)
  }]
})
export class SelectByComponent implements ControlValueAccessor, AfterViewInit {

  public valueView: any | undefined;
  @ContentChildren(OptionComponent) options!: QueryList<OptionComponent<any>>
  @Input() placeholder = "";
  private onChange!: (value: string)=>void;
  private onTouched!: ()=>void;

  writeValue(value: string): void{
    setTimeout(()=>{
      this.valueView = this.options.find(item=>item.value===value)?.valueView
    },0)
  }
  registerOnChange(fn:(value: string)=>void):void{
    this.onChange = fn;
  }
  registerOnTouched(fn: ()=>void):void{
    this.onTouched = fn;
  }
  ngAfterViewInit() {
    this.options.changes.pipe(
        startWith(this.options),
        map((options) => options.toArray()),
        switchMap((options) => merge(...options.map((option: any) => option.selectionChanged)))
    ).subscribe((option: any)=>{
      this.valueView = option.valueView
      this.onChange(option.value)
    })
  }
}
