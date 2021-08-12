import { Request, Response } from 'express';

import { SpecificationRepository } from '../../repository';
import { CreateSpecificationService } from '../../services';

export class CreateSpecificationController {
  specificationRepository: SpecificationRepository;
  createSpecificationService: CreateSpecificationService;
  constructor() {
    this.specificationRepository = new SpecificationRepository();
    this.createSpecificationService = new CreateSpecificationService(this.specificationRepository);
  }
  handler (request: Request, response: Response): Response {
    const { name, description } = request.body;
    this.createSpecificationService.execute({ name, description });
    return response.status(201).send();
  }
}
