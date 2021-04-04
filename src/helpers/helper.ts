import { IHelper } from "./helper.interface";

class Helper implements IHelper {// eslint-disable-line
    convertTimeStampToDate(date: number): string {
        let dateString = new Date(date);
        const offset = dateString.getTimezoneOffset()
        dateString = new Date(dateString.getTime() - (offset*60*1000)) // offset for UTC
        return dateString.toISOString().split('T')[0]
    }
    deleteKeysFromObject(obj: any, keys: string[]): any {
        keys.forEach( key => {
            delete obj[key];
        })
        return obj;
    }
    getShortMonthFromDate(date: Date): string {
        const month = date.toLocaleString("en", { month: "short"  });
        return month;
    }
    getYearFromDate(date: Date): string {
        const year = date.toLocaleString("en", { year: "numeric"});
        return year;
    }
}

export default new Helper();