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
    {prop: 'logo', name: 'Logo', width: '50px', cellTemplate: 'logo'},
    {prop: 'model', name: 'Model', width: '155px', cellTemplate: 'model'},
    {prop: 'age', name: 'Age', width: '90px'},
    {prop: 'tank', name: 'Tank', width: '90px'},
    {prop: 'bodyType', name: 'Body Type', width: '135px'},
    {prop: 'user.first_name', name: 'User', width: '100px'},
    {prop: 'user.email', name: 'Email', width: '100px'}
  ];
  public data: Car[] = [
    {id: 123 ,model: {name: "Opel", link: 'https://ru.wikipedia.org/wiki/opel'}, logo:'../assets/img/opel.icon.png', age: 10, tank: 50, bodyType: "sedan", user: {id: '125', last_name: 'Michal', first_name: 'Jorge', email: 'hsgd@gmail.com'}},
    {id: 124, model: {name: "VW", link: 'https://ru.wikipedia.org/wiki/volkswagen'}, logo:'../assets/img/vw.icon.png', age: 5, tank: 45, bodyType: "hetchback", user: {id: '125', last_name: 'Michal', first_name: 'Steve', email: 'hsgd@gmail.com'}},
    {id: 125, model: {name: "Volvo", link: 'https://ru.wikipedia.org/wiki/volvo'}, logo:'../assets/img/volvo.icon.png', age: 3, tank: 55, bodyType: "suv", user: {id: '125', last_name: 'Michal', first_name: 'Margo', email: 'hsgd@gmail.com'}},
    {id: 126, model: {name: "Audi", link: 'https://ru.wikipedia.org/wiki/Audi'}, logo:'../assets/img/audi.icon.png', age: 2, tank: 55, bodyType: "liftback", user: {id: '125', last_name: 'Michal', first_name: 'Sophie', email: 'hsgd@gmail.com'}},
    {id: 127, model: {name: "Mazda", link: 'https://ru.wikipedia.org/wiki/Mazda'}, logo:'../assets/img/mazda.icon.png', age: 7, tank: 42, bodyType: "suv", user: {id: '125', last_name: 'Michal', first_name: 'Bruce', email: 'hsgd@gmail.com'}}
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
  getOption(car: any, prop: any){
    return prop.split('.').reduce((acc:any,id:any)=>{
      return acc[id]
    },car)
  }

}
