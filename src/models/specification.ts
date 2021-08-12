import { v4 as uuid } from 'uuid';

export class Specification {
  id?: string;
  name!: string;
  description!: string;
  created_at!: Date;
  constructor(values: Omit<Specification, 'id'>) {
    if (!this.id) {
      this.id = uuid();
    }
    Object.assign(this, values);
  }
}
