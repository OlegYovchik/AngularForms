import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { permissions } from './app.permission';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor() { }

  public getPermissions(): Observable<any>{
    return of(permissions);
  }

}
