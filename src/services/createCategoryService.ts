import { ICategoryInterface } from '../repository/ICategoryInterface';

interface IRequest {
  name: string
  description: string
}

export class CreateCategoryService {
  constructor(
    private readonly categories: ICategoryInterface
  ) { }
  execute ({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categories.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error('category already exists');
    }
    this.categories.create({ name, description });
  }
}
