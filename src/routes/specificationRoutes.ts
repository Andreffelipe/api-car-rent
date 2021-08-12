import { Router } from 'express';
import { CreateSpecificationController } from '../useCase/specificationUseCase';

export class SpecificationRoutes {
  routes!: Router;
  createSpecificationController: CreateSpecificationController;
  constructor() {
    this.routes = Router();
    this.createSpecificationController = new CreateSpecificationController();
    this.declarations();
  }
  private declarations (): void {
    this.routes.post('/', (request, response) => {
      return this.createSpecificationController.handler(request, response);
    });
  }
}

export default new SpecificationRoutes().routes;
