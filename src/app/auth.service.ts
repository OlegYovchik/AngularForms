import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export type User = {
  email: string
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public status = false;
  constructor( private http: HttpClient) { }
  login(user: User){
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJKAs-0fQF_B_NYRZQFHp1EgCIUOOWjpY`,user)
  }
}
