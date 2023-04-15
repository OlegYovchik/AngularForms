import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car, ColumnConfig} from '../app.model';
import {AdminToolsApiService} from "./admin-tools-api.service";

@Component({
  selector: 'app-admin-tools',
  templateUrl: './admin-tools.component.html',
  styleUrls: ['./admin-tools.component.css']
})
export class AdminToolsComponent implements OnInit{

  public toolsArray = ['car','user','body'];
  public form: FormGroup;
  public arrPages:number[] = [];
  public pageCars = 0;
  public columns: ColumnConfig<Car>[] = [
    {prop: 'logo', name: 'Logo', width: '50px', cellTemplate: 'logo'},
    {prop: 'model', name: 'Model', width: '155px', cellTemplate: 'model'},
    {prop: 'age', name: 'Age', width: '90px'},
    {prop: 'tank', name: 'Tank', width: '90px'},
    {prop: 'bodyType', name: 'Body Type', width: '135px'},
    {prop: 'user.first_name', name: 'User', width: '100px'},
    {prop: 'user.email', name: 'Email', width: '100px'}
  ];
  public data: Car[] = [];
  constructor(private fb: FormBuilder, private adminToolsService: AdminToolsApiService){
    this.form = this.fb.group({
      car: [""],
      user: [""],
      body: [""]
    })
  }
  fetch(){
    if(this.form.value.car){
    }
  }
  ngOnInit() {
    this.fetchCurentCars(this.pageCars,5);
  }
  public fetchCurentCars(pageNumber: number, pageSize: number){
    this.adminToolsService.get(pageNumber,pageSize).subscribe(res=>{
      this.data = res.items;
      this.pageCars = res.pageNumber;
      if(!this.arrPages.length){
        let countPage = Math.ceil(res.totalCount/res.pageSize);
        for(let i = 0; i < countPage; i++){
          this.arrPages.push(i)
        }
      }
    })
  }
  public changePage(page: number){
    this.pageCars = page;
    this.fetchCurentCars(this.pageCars,5);
  }
}
