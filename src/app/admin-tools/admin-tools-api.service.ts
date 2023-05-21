import { Injectable } from '@angular/core';
import { ApiResponse } from "../table/table.model";
import { Car } from "../app.model";
import { Observable, of } from "rxjs";
import { cars } from "./cars.mock";
import {Api, DataRequest} from "./ApiList";


@Injectable({
    providedIn: 'root'
})
export class AdminToolsApiService implements Api<Car>{
    public get(dataRequest: DataRequest):Observable<ApiResponse<Car>>{
        const {pageNumber, pageSize , filters} = dataRequest;
        const filteredCar = this.filterCars(cars,filters);
        return of(
        {
            pageNumber,
            pageSize,
            items: filteredCar.slice((pageNumber-1) * pageSize,  (pageNumber)* pageSize),
            totalCount: filteredCar.length
            }
        )
    }
    private filterCars(cars:Car[], filter: any){
        let newCars: Car[] = cars;
        if(filter.searchCar!==""){newCars = newCars.filter((item)=> item.user?.first_name.toLowerCase().includes(filter.searchCar.toLowerCase()))}
        if(filter.typeOfCar){
            if(filter.typeOfCar.length!==0){
                newCars = newCars.filter((item)=>filter.typeOfCar.some((body:any)=>item.bodyType===body))
            }
        }
        return newCars;
    }
    public createArrayPages(res: number){
        let pageCars = Math.ceil(res/5)+1;
        let arrPages = [];
        for(let i = 1; i < pageCars; i++){
            arrPages.push(i);
        };
        return arrPages;
    }
}
