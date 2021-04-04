import { IMuseumService } from "./museumService.interface";
import { logger } from "../../../helpers/logger";
import { museumVistorStats, visitorStats } from "../resultTypes";
import helper from "../../../helpers/helper";

class MuseumService implements IMuseumService {
  // eslint-disable-line

  transformVisitorStats(apiResponse: any,ignoredMuseum?: string): visitorStats {
    try {
      const response: visitorStats = {};
      let filteredResponse = {...apiResponse};

      const date = new Date(apiResponse.month);
      response.month = helper.getShortMonthFromDate(date);
      response.year = Number(helper.getYearFromDate(date));

      const keysToBeRemoved = ["month"];
      if (ignoredMuseum) {
        keysToBeRemoved.push(ignoredMuseum);
        response.ignored = {
          museum: ignoredMuseum,
          visitors: Number(apiResponse[ignoredMuseum]),
        };
      }
      filteredResponse = helper.deleteKeysFromObject(
        apiResponse,
        keysToBeRemoved
      ); // delete month and ignored museum keys from object so it can be processed

      let highest = -1,
        highestObj: museumVistorStats,
        lowest = 0,
        lowestObj: museumVistorStats,
        total = 0;

      Object.keys(filteredResponse).forEach((key) => {
        const visitorCount = Number(filteredResponse[key]);
        total += visitorCount;
        if (visitorCount > highest) {
          highest = visitorCount;
          highestObj = {
            museum: key,
            visitors: visitorCount,
          };
        }
        if (visitorCount < lowest || lowest == 0) {
          lowest = visitorCount;
          lowestObj = {
            museum: key,
            visitors: visitorCount,
          };
        }
      });
      
      response.highest = highestObj;
      response.lowest = lowestObj;
      response.total = total;

      logger.info("success");

      return response;
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }
}

export default new MuseumService();
