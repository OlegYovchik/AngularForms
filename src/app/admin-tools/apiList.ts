import { Observable } from "rxjs";
import { ApiResponse } from "../table/table.model";

export interface DataRequest{
    pageNumber:number;
    pageSize:number;
}
export interface Api<D> {
    get(request: DataRequest): Observable<ApiResponse<D>>;
}
export class ApiList<T>{
    constructor(api:Api<T>){}

    //@ts-ignore
    public changes():Observable<ApiResponse<T>>{}
    public navigateTo(pageNumber:number,pageSize:number):void{}

}