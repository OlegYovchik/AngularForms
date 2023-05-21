import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Car, ColumnConfig } from '../app.model';
import { ApiList } from "./ApiList";
import { AdminToolsApiService } from "./admin-tools-api.service";


@Component({
  selector: 'app-admin-tools',
  templateUrl: './admin-tools.component.html',
  styleUrls: ['./admin-tools.component.css']
})
export class AdminToolsComponent implements OnInit{
  @Output()onSearch = new EventEmitter();
  public formFilter = this.fb.group({
    searchCar: [""],
    typeOfCar: []
  });
  public searchText = '';
  public columns: ColumnConfig<Car>[] = [
    {prop: 'logo', name: 'Logo', width: '50px', cellTemplate: 'logo'},
    {prop: 'model', name: 'Model', width: '155px', cellTemplate: 'model'},
    {prop: 'age', name: 'Age', width: '90px'},
    {prop: 'tank', name: 'Tank', width: '90px'},
    {prop: 'bodyType', name: 'Body Type', width: '135px'},
    {prop: 'user.first_name', name: 'User', width: '100px',cellTemplate: 'userName'},
    {prop: 'user.email', name: 'Email', width: '100px'}
  ];
  public bodiesOfCar = ["suv", "liftback", "hatchback", "sedan"];

  public apiList = new ApiList(this.apiResp)
  constructor(private fb: FormBuilder, private apiResp: AdminToolsApiService){}
  ngOnInit() {
    this.formFilter.valueChanges.subscribe((value:any)=>{
      this.apiList.updateFilter(value);
      this.searchText = value.searchCar;
    })
  }

}
