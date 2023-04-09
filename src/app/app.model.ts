export interface CarType {
  name: string
}
export interface BodyCar {
  name: string
}
export interface User {
  id: string
  first_name: string
  last_name: string
  email: string
}
export type Option <T=unknown> = {
  label: string
  value: string
  name?: string
  id?: number
  entity?: T
  checked?: boolean
}
export interface ItemError {
  name: string
}
export interface ColumnConfig<T> {
  prop: keyof T | string
  name?: string
  width?: string
}

export interface Car {
  id: number
  user?: User
  model: string
  age: number
  tank: number
  bodyType: string
}