import { Injectable } from '@angular/core';
import { FetchItemsService } from './fetch-items.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private fetchItems: FetchItemsService) { 
  }

  load():Promise<any>{
    return new Promise((resolve)=>{
      resolve(5);
      this.fetchItems.getCars().subscribe(res=>{
        localStorage.setItem("cars", JSON.stringify(res))
      });
      this.fetchItems.getBodies().subscribe(res=>{
        localStorage.setItem("bodies", JSON.stringify(res))
      });
      this.fetchItems.getUsers().subscribe(res=>{
        localStorage.setItem("users", JSON.stringify(res))
      });
    })
  }
}
