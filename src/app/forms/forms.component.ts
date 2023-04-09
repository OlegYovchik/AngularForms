import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppApiService } from "../app-api.service";
import { Users } from "../app.model";
import { map } from "rxjs";

export type Option <T=unknown> = {
  label: string
  value: string
  entity?: T
  checked?: boolean
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  public values = [
    {id: 1, name: 'hetchback'},
    {id: 2, name: 'liftback'},
    {id: 3, name: 'crossover'},
    {id: 4, name: 'sedan'},
    {id: 5, name: 'multivan'},
  ]
  public form!: FormGroup
  public users: Option<Users>[] = []
  public options: Option[] = [
    {label: 'BMW', value: '123'},
    {label: 'Alfa-Romeo', value: '124'},
    {label: 'Opel', value: '125'}
  ]
  public optionsCar = ['hatch', 'acc', 'matrix', 'navi']

  public users$ = this.api.getUsers().pipe(
      map(users=>
        users.map(item => ({
          label: item.first_name,
          value: item.id,
          entity: item
        }))
      )
  )

  constructor( private http: HttpClient, private api: AppApiService) { }

  ngOnInit() {
    this.form = new FormGroup({
      car: new FormControl(null, Validators.required),
      userId: new FormControl(null, Validators.required),
      userMulti: new FormControl(null, Validators.required),
      checkCar: new FormControl(['acc','matrix'], Validators.required),
      newVersion: new FormControl(2, Validators.required)
    })
    
    this.api.getUsers().subscribe((res)=>{
      this.users = res.map(item=>({
        label:"",
        value: item.id,
        entity: item
      }))
    }
  )
    this.form.valueChanges.subscribe(console.log)
  }

  fetchData(){
    console.log(this.form.value)
  }
}
