import test from "ava";
import helper from "../src/helpers/helper";

test("check if milliseconds to timestamp works", (t) => {
    const timeStamp = 1404198000000;
  const result = helper.convertTimeStampToDate(timeStamp);
  t.is(result, "2014-07-01");
});

test("check if delete keys from object works", (t) => {
  const obj = {
      deletedKey: 'test',
      key: 'test'
  }
  const deletedObj = {
    key: 'test'
  }
  const result = helper.deleteKeysFromObject(obj, ['deletedKey']);
  t.deepEqual(result, deletedObj);
});

const date = new Date('2014-07-01T00:00:00.000');

test("check if get month from date works", (t) => {
  const result = helper.getShortMonthFromDate(date);
  t.is(result, "Jul");
});

test("check if get year from date", (t) => {
  const result = helper.getYearFromDate(date);
  t.is(result, "2014");
});
