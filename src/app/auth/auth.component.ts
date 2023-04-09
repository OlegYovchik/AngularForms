import {Component, OnInit} from '@angular/core';
import {AuthService, User} from "../auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";

export interface Responce {
  displayName: string
  mail: string
  idToken: string
  kind: string
  localId: string
  registered: boolean
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  public form!: FormGroup;
  constructor( private authService: AuthService, private router: Router){}
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  login(){
    const userAuth: User = {
      email: this.form?.value.email,
      password: this.form?.value.password
    }
    console.log(userAuth);
    this.authService.login(userAuth).subscribe((res) => {
      if(res){
        this.router.navigate(['/home'])
      }
    })
  }
  show(event: HTMLInputElement){
    this.form.value.email = event;
  }
}
