import { Injectable } from '@angular/core';
import { cars } from './cars';
import { Observable, of } from 'rxjs';
import { bodies } from './bodies';
import { users } from './users';
import { BodyCar, CarType, User } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class FetchItemsService {
  public cars: string [] = [];

  setAll(){
  }
  
  public getCars():Observable<CarType[]>{
    return of(cars);
  }

  public getBodies():Observable<BodyCar[]>{
    return of(bodies);
  }

  public getUsers():Observable<User[]>{
    return of(users);
  }
}
