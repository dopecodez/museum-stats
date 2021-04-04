import { Request, Response, Router } from 'express';
import { IRouter } from '../router.interface';
import musuemService from './services/muesumService';
import helper from '../../helpers/helper';
const router = Router();
import { logger } from "../../helpers/logger";

import { config } from '../../config/config';
import makeRequest from '../../helpers/request';

class MuseumRouter implements IRouter{// eslint-disable-line
    get routes(){
        router.get('/', async (req: Request, res: Response) => {
            // eslint-disable-next-line no-useless-catch
            try {
                const date = Number(req.query.date);
                const ignoredMuseum = req.query.ignore;
                if (!date) {
                  throw new Error("missing date in query");
                }
                const dateString = helper.convertTimeStampToDate(date);
                const apiUrl = `${config.API_URL}?month=${dateString}T00:00:00.000`;
                const apiResponse = await makeRequest(apiUrl);
                if (apiResponse.length == 0) {
                  throw new Error(`Response is empty for ${apiUrl}`);
                }
                const result = musuemService.transformVisitorStats(apiResponse[0], (ignoredMuseum as string));
                return res.json({"attendance": result}).end();
            } catch (err) {
                logger.error(err.message);
                return res.status(500).json({"error": err.message}).end();
            }
        });
        return router;
    }
}

export default new MuseumRouter();