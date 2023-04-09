import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  @Input() status: boolean | undefined;
  constructor(public authService: AuthService, private router: Router){
  }

  ngOnInit(): void {
  }
  
  unloging(){
    this.authService.isAuthorized$.next(false)
  }
}
