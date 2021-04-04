import { Router } from 'express';
import { IRouter } from './router.interface';
import MuseumRouter from './musuem/museumRouter'

// Init router
const router = Router();

class BaseRouter implements IRouter{// eslint-disable-line
    get routes(){
        router.use('/visitors', MuseumRouter.routes);
        return router;
    }
}

export default new BaseRouter();