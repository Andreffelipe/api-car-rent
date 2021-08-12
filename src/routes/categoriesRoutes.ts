import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController, FindAllCategoryController } from '../useCase/categoryUseCase';
import { ImportController } from '../useCase/importUseCase';

const upload = multer({
  dest: './tmp'
});

class CategoriesRoutes {
  route!: Router;
  createCategoryController: CreateCategoryController;
  findAllCategoryController: FindAllCategoryController;
  importController: ImportController;

  constructor() {
    this.route = Router();
    this.createCategoryController = new CreateCategoryController();
    this.findAllCategoryController = new FindAllCategoryController();
    this.importController = new ImportController();
    this.declarations();
  }

  private declarations () {
    this.route.post('/', (request, response) => {
      return this.createCategoryController.handler(request, response);
    });
    this.route.get('/', (request, response) => {
      return this.findAllCategoryController.handler(request, response);
    });
    this.route.post('/import', upload.single('file'), (request, response) => {
      return this.importController.handler(request, response);
    });
  }
}

export default new CategoriesRoutes().route;
