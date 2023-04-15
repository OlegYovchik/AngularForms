import { Injectable } from '@angular/core';
import { ApiResponse } from "../table/table.model";
import { Car } from "../app.model";
import { Observable, of } from "rxjs";
import { cars } from "./cars.mock";


@Injectable({
    providedIn: 'root'
})
export class AdminToolsApiService {

    public get(pageNumber:number, pageSize:number):Observable<ApiResponse<Car>>{
        return of(
            {
                pageNumber,
                pageSize,
                totalCount:cars.length,
                items: cars.slice(pageNumber * pageSize,  (pageNumber +1 )* pageSize)
            }
        )
    }
}
