import { Category } from '../models/category';
//DTO data object transfer
export interface ICreateCategoryDTO {
  name: string
  description: string
}
export interface ICategoryInterface {
  create ({ name, description }: ICreateCategoryDTO): void
  list (): Category[]
  findByName (name: string): Category | undefined
}
