import { Category } from '../../models/category';
import { ICategoryInterface, ICreateCategoryDTO } from '../ICategoryInterface';


export class CategoriesRepository implements ICategoryInterface {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance (): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  create ({ name, description }: ICreateCategoryDTO): void {
    const category: Category = new Category({ name: name, description: description, created_at: new Date() });
    this.categories.push(category);
  }
  list (): Category[] {
    return this.categories;
  }
  findByName (name: string): Category | undefined {
    return this.categories.find((value) => value.name === name);
  }
}
