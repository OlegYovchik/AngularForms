import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, Option } from "../app.model";
import { of } from "rxjs";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  public values: Option[] = [];
  public form!: FormGroup;
  public users: Option<User>[] = [];
  public options: Option[] = [];
  public optionsCar = ['hatch', 'acc', 'matrix', 'navi'];

  constructor( public authService: AuthService ) { }

  ngOnInit() {
    this.form = new FormGroup({
      car: new FormControl(null, Validators.required),
      userId: new FormControl(null, Validators.required),
      userMulti: new FormControl(null, Validators.required),
      checkCar: new FormControl(['acc','matrix'], Validators.required),
      newVersion: new FormControl('', Validators.required)
    })

    let arrBodies = localStorage.getItem('bodies');
    if(arrBodies){
      of(JSON.parse(arrBodies)).subscribe((res)=>{
        this.values = res.map((item:any)=>({
          name: item.name,
          id: Math.round(Math.random()*1000)
        }))
      })
    }

    let arrUser = localStorage.getItem('users');
    if(arrUser){
      of(JSON.parse(arrUser)).subscribe((res)=>{
        this.users = res.map((item:any)=>({
          label:item.first_name,
          value: item.id,
          entity: item
        }))
      })
    }

    let arrCar = localStorage.getItem('cars');
    if(arrCar){
      of(JSON.parse(arrCar)).subscribe((res)=>{
        this.options = res.map((item:any)=>({
          label: item.name.toUpperCase(),
          value: Math.round(Math.random()*1000)
        }))
      })
    }
  }
  
  fetchData(){
    console.log(this.form.value)
  }
}
