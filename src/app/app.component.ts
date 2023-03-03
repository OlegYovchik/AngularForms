import { Component } from '@angular/core';
import {AppApiService} from "./app-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alega';
  constructor(private apiService: AppApiService){}
}
