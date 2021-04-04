import { visitorStats } from "../resultTypes";

export interface IMuseumService {
  transformVisitorStats(apiResponse: any, ignoredMuseum: string): visitorStats;
}
