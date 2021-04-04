export interface IHelper {
    convertTimeStampToDate(date: number): string;
    deleteKeysFromObject(obj: any, keys: string[]): any;
    getShortMonthFromDate(date: Date): string;
    getYearFromDate(date: Date): string;
}