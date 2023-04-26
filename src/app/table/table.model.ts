export  interface ApiResponse<T> {
    pageNumber:number,
    pageSize:number,
    arrPages:number[],
    items:T[]
}