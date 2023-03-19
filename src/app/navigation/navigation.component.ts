import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  @Input() status: boolean | undefined;
  constructor(private authService: AuthService){
  }
  ngOnInit(){
    console.log(this.authService.status);
  }
  unloging(){

  }
}
