import { ISpecificationRepository } from '../repository/ISpecificationRepository';

interface IRequest {
  name: string
  description: string
}

export class CreateSpecificationService {
  constructor(
    private readonly specification: ISpecificationRepository
  ) { }
  execute ({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specification.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error('specification already exists');
    }
    this.specification.create({ name, description });
  }
}
