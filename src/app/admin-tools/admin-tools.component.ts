import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car, ColumnConfig} from '../app.model';

@Component({
  selector: 'app-admin-tools',
  templateUrl: './admin-tools.component.html',
  styleUrls: ['./admin-tools.component.css']
})
export class AdminToolsComponent {

  public toolsArray = ['car','user','body'];
  public form: FormGroup;
  public columns: ColumnConfig<Car>[] = [
    {prop: 'model', name: 'Model', width: '135px'},
    {prop: 'age', name: 'Age', width: '90px'},
    {prop: 'tank', name: 'Tank', width: '90px'},
    {prop: 'bodyType', name: 'Body Type', width: '135px'},
    {prop: 'user.first_name', name: 'User', width: '100px'},
    {prop: 'user.email', name: 'Email', width: '100px'}
  ];
  public data: Car[] = [
    {id: 123 ,model: "Opel", age: 10, tank: 50, bodyType: "sedan", user: {id: '125', last_name: 'Michal', first_name: 'Jorge', email: 'hsgd@gmail.com'}},
    {id: 124, model: "VW", age: 5, tank: 45, bodyType: "hetchback", user: {id: '125', last_name: 'Michal', first_name: 'Steve', email: 'hsgd@gmail.com'}},
    {id: 125, model: "Volvo", age: 3, tank: 55, bodyType: "suv", user: {id: '125', last_name: 'Michal', first_name: 'Margo', email: 'hsgd@gmail.com'}},
    {id: 126, model: "Audi", age: 2, tank: 55, bodyType: "liftback", user: {id: '125', last_name: 'Michal', first_name: 'Sophie', email: 'hsgd@gmail.com'}},
    {id: 127, model: "Mazda", age: 7, tank: 42, bodyType: "suv", user: {id: '125', last_name: 'Michal', first_name: 'Bruce', email: 'hsgd@gmail.com'}}
  ];

  constructor(private fb: FormBuilder){
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
}
