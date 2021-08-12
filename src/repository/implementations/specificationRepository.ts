import { Specification } from '../../models/specification';
import { ISpecificationRepository, ISpecificationRepositoryDTO } from '../ISpecificationRepository';

export class SpecificationRepository implements ISpecificationRepository {
  private specification: Specification[]
  constructor() {
    this.specification = [];
  }
  findByName (name: string): Specification | undefined {
    const result = this.specification.find((value) => value.name === name);
    return result;
  }
  create ({ name, description }: ISpecificationRepositoryDTO): void {
    const specification = new Specification({ name: name, description: description, created_at: new Date() });
    this.specification.push(specification);
  }

}
