import { Request, Response } from 'express';

import { CategoriesRepository } from '../../repository';
import { CreateCategoryService } from '../../services';

export class CreateCategoryController {
  categoriesRepository: CategoriesRepository;
  createCategoriesService: CreateCategoryService;
  constructor() {
    this.categoriesRepository = CategoriesRepository.getInstance();
    this.createCategoriesService = new CreateCategoryService(this.categoriesRepository);
  }
  handler (request: Request, response: Response): Response {
    const { name, description } = request.body;
    this.createCategoriesService.execute({ name, description });
    return response.status(201).send();
  }
}
