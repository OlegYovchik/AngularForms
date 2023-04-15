import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
  ViewChildren
} from '@angular/core';
import {ColumnConfig} from '../app.model';
import {CustomCell, CustomCellDirective} from "../custom-cell.directive";
import {CustomHeader, CustomRow} from "../table-model";
import { ApiList } from "../admin-tools/apiList";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent <T> implements AfterViewInit{
  @Input() public columns?: ColumnConfig<T>[];
  @Input() public data: T[] | undefined;

  //TODO new interface for communicate with table
  @Input() public dataAdapter?: ApiList<T>

  @ViewChildren(CustomCellDirective,{read: CustomCell})
    public customDefaultCells: QueryList<CustomCell> = new QueryList();
  @ContentChildren(CustomCellDirective,{read: CustomCell})
    public customCells: QueryList<CustomCell> = new QueryList();

  public columnsDataModified?: any[];
  public customHeaderCells = CustomHeader;
  public customRowCells = CustomRow;

  ngAfterViewInit(){
      this.columnsDataModified = this.columns?.map(item=>({
        ...item,
        headerTemplateRef: item.headerTemplate ? this.getHeaderTemplate(item.headerTemplate): this.getDefaultHeaderTemplate('defaultHeader'),
        cellTemplateRef: item.cellTemplate ? this.getCellTemplate(item.cellTemplate) : this.getDefaultCellTemplate('defaultCell')
      }))
  }
  private getCellTemplate(cellName: string){
      return this.customCells.find(cell=>cell.appCustomCell===cellName)?.tmpRef
  }
  private getHeaderTemplate(headerName: string){
    return this.customCells.find(cell=> cell.appCustomCell === headerName)?.tmpRef
  }
  private getDefaultCellTemplate(cellName: string){
    return this.customDefaultCells.find(item=>item.appCustomCell===cellName)?.tmpRef
  }
  private getDefaultHeaderTemplate(headerName: string){
    return this.customDefaultCells.find(cell=>cell.appCustomCell===headerName)?.tmpRef
  }
  public getValue(row: T, prop: unknown): unknown {
    if (!(prop as string).includes('.')) {
      return row[prop as keyof T];
    }
    // @ts-ignore
    return (prop as string).split('.').reduce<unknown>((value, key) => value[key], row);
  }
}
