import {BehaviorSubject, map, Observable, ReplaySubject, scan, startWith, switchMap, tap} from "rxjs";
import { ApiResponse } from "../table/table.model";

export interface DataRequest{
    pageNumber:number;
    pageSize:number;
    filters:{};
}
export interface Api<D> {
    get(request: DataRequest): Observable<ApiResponse<D>>;
}
export class ApiList<T>{
    public request = {
        pageNumber: 1,
        pageSize: 5,
        filters: {
            searchCar: "",
            typeBody: []
        }
    }
    // private requestDispatcher = new ReplaySubject<Partial<DataRequest>>(1);
    // private request$$ = this.requestDispatcher.pipe(
    //     startWith(this.request),
    //     scan(
    //         (stored, updated) => ({
    //             ...stored,
    //             ...updated
    //         }),
    //         this.request
    //     )
    // );
    public request$ = new BehaviorSubject(this.request);
    public get$ = this.request$.pipe(
        switchMap((request)=>{
            return this.api.get(request);
        })
    )
    constructor(private api:Api<T>){}
    public changes():Observable<ApiResponse<T>>{
        return this.get$
    }
    public navigateTo(pageNumber:number,pageSize:number):void{
        this.request.pageNumber = pageNumber;
        this.request.pageSize = pageSize;
        this.request$.next(this.request);
    }
    public updateFilter(value:any){
        this.request.pageNumber = 1;
        this.request.pageSize = 5;
        this.request.filters = value;
        this.request$.next(this.request);
    }
}