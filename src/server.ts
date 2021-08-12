import express, { Express } from 'express';
import { categories, specification } from './routes';
import swagger from 'swagger-ui-express';
import swaggerFile from './swagger.json';
class Application {
  express: Express
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }
  middleware (): void {
    this.express.use(express.json());
  }
  routes (): void {
    this.express.use('/api-docs', swagger.serve, swagger.setup(swaggerFile));
    this.express.use('/categories', categories);
    this.express.use('/specification', specification);
  }
}

export default new Application().express;
