export  interface ApiResponse<T> {
    pageNumber:number,
    pageSize:number,
    totalCount:number,
    items:T[]
}