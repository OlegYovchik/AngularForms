import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'Alega';
  constructor(private authService: AuthService){}

  ngOnInit(){
    if(this.authService.status){
      console.log(this.authService.status)
    }
  }
}
