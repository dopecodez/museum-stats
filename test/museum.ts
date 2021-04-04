import test from "ava";
import musuemService from "../src/modules/musuem/services/muesumService";

const apiResponse1 = {
  month: "2014-07-01T00:00:00.000",
  america_tropical_interpretive_center: "13490",
  avila_adobe: "32378",
  chinese_american_museum: "2239",
  firehouse_museum: "5406",
  hellman_quon: "120",
  pico_house: "3375",
  visitor_center_avila_adobe: "3527",
};

const apiResponse2 = {
  month: "2014-07-01T00:00:00.000",
  america_tropical_interpretive_center: "13490",
  avila_adobe: "32378",
  chinese_american_museum: "2239",
  firehouse_museum: "5406",
  hellman_quon: "120",
  pico_house: "3375",
  visitor_center_avila_adobe: "3527",
};

const visitorStatsWithoutIgnore = {
  month: "Jul",
  year: 2014,
  highest: {
    museum: "avila_adobe",
    visitors: 32378,
  },
  lowest: {
    museum: "hellman_quon",
    visitors: 120,
  },
  total: 60535
};

const visitorStatsWithIgnore = {
  month: "Jul",
  year: 2014,
  ignored: {
    museum: "avila_adobe",
    visitors: 32378,
  },
  highest: {
    museum: "america_tropical_interpretive_center",
    visitors: 13490,
  },
  lowest: {
    museum: "hellman_quon",
    visitors: 120,
  },
  total: 28157
};

test("check if transform works without ignore", async (t) => {
  const result = musuemService.transformVisitorStats(apiResponse1);
  t.deepEqual(result, visitorStatsWithoutIgnore);
});

test("check if transform works with ignore", async (t) => {
  const result = musuemService.transformVisitorStats(apiResponse2, 'avila_adobe');
  t.deepEqual(result, visitorStatsWithIgnore);
});
