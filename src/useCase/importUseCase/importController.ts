import { Request, Response } from 'express';
import { CategoriesRepository } from '../../repository';
import { ImportService } from '../../services';

export class ImportController {
  importController: ImportService;
  categoriesRepository: CategoriesRepository;
  constructor() {
    this.categoriesRepository = CategoriesRepository.getInstance();
    this.importController = new ImportService(this.categoriesRepository);
  }
  handler (request: Request, response: Response): Response {
    const { file } = request;
    this.importController.execute(file as Express.Multer.File);
    return response.send();
  }
}
