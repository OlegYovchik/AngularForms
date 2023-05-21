import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiList} from "../admin-tools/ApiList";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent<T> implements OnInit{
  @Input()dataAdapter:ApiList<T>|undefined;
  @Input()pageSize: number | undefined;
  @Input()itemCount: number | undefined;
  @Input()currentPage: number | undefined;
  @Output()configChanged = new EventEmitter();
  public arrPages:number[] = [];


  public changePage(page: number){
    this.currentPage = page;
    this.configChanged.emit(this.currentPage);
  }
  ngOnInit(){
    if(this.itemCount && this.pageSize)
      for(let i = 1; i <= Math.ceil(this.itemCount/this.pageSize); i++){
        this.arrPages.push(i);
      }

  }
}
