import express from 'express';
import cors from 'cors';
import { ServerInterface } from './app.interface';
import baseRouter from '../modules/baseRouter'

class Server implements ServerInterface {// eslint-disable-line

  async server(): Promise<express.Application> {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use('/api', baseRouter.routes);//setting up base route
    // define a route handler for the default home page so it looks good
    app.get("/", (req, res) => {
      res.send("Welcome to express-create application! ");
    });
    return app;
  }
}

export default new Server();
