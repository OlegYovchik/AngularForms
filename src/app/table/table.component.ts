import { Component, Input, OnInit } from '@angular/core';
import { Car, ColumnConfig, User } from '../app.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent <T extends Car> implements OnInit{
  @Input() public columns: ColumnConfig<T>[] | undefined;
  @Input() public data: T[] | undefined;

  public showModal = false;
  public posX = '';
  public posY = '';

  ngOnInit(){
    console.log(this.columns, this.data);
  }

  showImage(item: string, event: MouseEvent){
    this.showModal = true;
    this.posX = 'left:' + (event.clientX +1000).toString() + 'px';
    this.posY = 'top:' + (event.clientY).toString() + 'px';
  }
  
  getValue(row: any, prop: any){
    return prop.split('.').reduce((acc: any, item: any)=>{
      return acc[item]
    },row)
  }
}
