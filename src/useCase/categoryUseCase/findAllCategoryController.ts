import { Request, Response } from 'express';
import { CategoriesRepository } from '../../repository';

export class FindAllCategoryController {
  categoriesRepository: CategoriesRepository;
  constructor() {
    this.categoriesRepository = CategoriesRepository.getInstance();
  }
  handler (request: Request, response: Response): Response {
    const all = this.categoriesRepository.list();
    return response.status(201).json(all);
  }
}
