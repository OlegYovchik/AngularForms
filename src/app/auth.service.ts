import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, tap} from "rxjs";
import {Responce} from "./auth/auth.component";

export type User = {
  email: string
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthorized$ = new BehaviorSubject<boolean>(true)
  constructor( private http: HttpClient) { }
  login(user: User){
    return this.http.post<Responce>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJKAs-0fQF_B_NYRZQFHp1EgCIUOOWjpY`,user)
        .pipe(tap(({registered})=> this.isAuthorized$.next(registered)))
  }
}
