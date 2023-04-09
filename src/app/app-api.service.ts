import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { User } from "./app.model";
import { users } from "./app.mock";

@Injectable({
  providedIn: 'root'
})
export class AppApiService {
  constructor() { }

  public getUsers():Observable<User[]>{
    return of(users)
  }
}
