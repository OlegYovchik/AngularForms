import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input, OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import {Car, CarType, ColumnConfig, FilterCars} from '../app.model';
import {CustomCell, CustomCellDirective} from "../custom-cell.directive";
import {CustomHeader, CustomRow} from "../table-model";
import {AdminToolsApiService} from "../admin-tools/admin-tools-api.service";
import {Api, ApiList} from "../admin-tools/ApiList";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent <T> implements AfterViewInit, OnInit{
  @Input() public columns?: ColumnConfig<T>[];
  @Input() public dataAdapter: ApiList<T> | undefined;

  //TODO new interface for communicate with table

  @ViewChildren(CustomCellDirective,{read: CustomCell})
    public customDefaultCells: QueryList<CustomCell> = new QueryList();
  @ContentChildren(CustomCellDirective,{read: CustomCell})
    public customCells: QueryList<CustomCell> = new QueryList();

  public data: T[] = [];

  public columnsDataModified?: any[];
  public customHeaderCells = CustomHeader;
  public customRowCells = CustomRow;


  constructor(private adminToolsService: AdminToolsApiService) {}
  ngOnInit(){
    this.dataAdapter?.changes().subscribe(res=> {
      this.data = res.items;
      console.log(this.data)
    })
  }
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
    //@ts-ignore
    return (prop as string).split('.').reduce<unknown>((value, key) => value[key], row);
  }

}
