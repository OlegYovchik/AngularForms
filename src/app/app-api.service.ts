import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Users } from "./app.model";
import { users } from "./app.mock";

@Injectable({
  providedIn: 'root'
})
export class AppApiService {
  constructor() { }

  public getUsers():Observable<Users[]>{
    return of(users)
  }
}
