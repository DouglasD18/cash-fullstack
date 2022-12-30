import express from 'express';
import cors from 'cors';
import { router } from './router/NotaFiscal.router';
import ErrorHandler from './middlewares/ErrorHandler';

class App {
  public express: express.Application

  public constructor () {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  private middlewares (): void {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(ErrorHandler);
  }

  private routes (): void {
    this.express.use(router);
  }
}

export default new App().express;
