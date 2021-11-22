/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */

const dailyOverview = [
  {
    date: "",
    cases: 100,
    death: 101,
    recovered: 102
  }
];

const provinceOverview = [
  {
    date: "",
    Quebec: 100,
    Ontario: 101,
    Manitoba: 102,
    Saskatchewan: 102,
    Alberta: 102,
    BritishColumbia: 102
  }
];

/* DailyOverview */

document.getElementById("cases").innerHTML = dailyOverview[0].cases;
document.getElementById("death").innerHTML = dailyOverview[0].death;
document.getElementById("recovered").innerHTML = dailyOverview[0].recovered;

/* ProvinceOverview */

document.getElementById("Quebec").innerHTML = provinceOverview[1].Quebec;
document.getElementById("Ontario").innerHTML = provinceOverview[1].Ontario;
document.getElementById("Manitoba").innerHTML = provinceOverview[1].Manitoba;
document.getElementById("Saskatchewan").innerHTML =
  provinceOverview[1].Saskatchewan;
document.getElementById("Alberta").innerHTML = dailyOverview[0].Alberta;
document.getElementById("BritishColumbia").innerHTML =
  dailyOverview[0].BritishColumbia;
