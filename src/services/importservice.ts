import fs from 'fs';
import csv from 'csv-parse';
import { ICategoryInterface } from '../repository/ICategoryInterface';

interface IImportCategory {
  name: string
  description: string
}

export class ImportService {
  constructor(
    private readonly categoryRepository: ICategoryInterface
  ) { }
  loadCategories (file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      const parse = csv();
      stream.pipe(parse);
      parse.on('data', (line) => {
        const [name, description] = line;
        categories.push({
          name,
          description
        });
      }).on('end', () => {
        fs.promises.unlink(file.path);
        resolve(categories);
      }).on('error', (error) => {
        reject(error);
      });
    });
  }
  async execute (file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map((category) => {
      const { name, description } = category;
      const exists = this.categoryRepository.findByName(name);
      if (!exists) {
        this.categoryRepository.create({ name, description });
      }
    });
  }
}
