import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export type Option = {
  label: string
  value: string
}
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  public form!: FormGroup

  public options: Option[] = [
    {label: 'BMW', value: '123'},
    {label: 'Alfa-Romeo', value: '124'},
    {label: 'Opel', value: '125'}
  ]
  constructor( private http: HttpClient) { }
  ngOnInit() {
    this.form = new FormGroup({
      selectName: new FormControl(this.options[2].value, Validators.required)
    })
    setTimeout(()=>this.form.get('selectName')?.setValue(this.options[0].value),1500);
    setTimeout(()=>this.form.get('selectName')?.disable(),1500);
    setTimeout(()=>this.form.get('selectName')?.enable(),3000);
    //testing CodeWar
    // @ts-ignore
    function minValue(values){
      return values.sort().filter((item: number, i: number)=>item!==values[i+1])
    }
    console.log(minValue([1,9,6,4,8,3,6,1]));
  }
  fetchData(){
    let params = new HttpParams();
    params = params.append('limit', '5');
    this.http.get<any>('https://dummyjson.com/products',{params})
      .subscribe()
  }
}
