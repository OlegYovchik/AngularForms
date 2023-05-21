import {AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AdminToolsComponent} from "../admin-tools/admin-tools.component";
@Directive({
  selector: '[highLight]'
})
export class HighLightDirective implements AfterViewInit, OnChanges{
  @Input()searchText: string | undefined;
  public defaultText = '';

  public initText = '';
  constructor(public el: ElementRef){}

  ngOnChanges(changes: SimpleChanges) {
    if(changes['searchText'].isFirstChange()){
      return;
    }
    setTimeout(()=>{
      if(this.searchText === ''){
        this.el.nativeElement.innerHTML = this.defaultText;
      }else{
        // if(this.defaultText[0].toUpperCase()){
        //   this.initText =`<span style="background-color:grey">${this.searchText?.toUpperCase()}</span>${this.defaultText.slice(1,this.defaultText.length)}`
        // }
        if(this.searchText) this.initText = this.defaultText.toLowerCase().replace(this.searchText,`<span style="background-color:grey">${this.searchText}</span>`)
        this.el.nativeElement.innerHTML = this.initText;
      }
    },0)
  }
  ngAfterViewInit(){
    this.defaultText = this.el.nativeElement.textContent;
  }
}
