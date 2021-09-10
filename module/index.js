/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */

const dailyOverview = [{
	date: '2021-09-10',
	cases: 395155,
	newCases: 703,
	death: 11297,
	newDeath: 1
}];


const dailyVirus = [{
	date: '2021-09-10',
	cases: 10155,
	newCases: 10290,
	death: 9579,
	newDeath: 39830
}];

// dailyVirus ->

document.getElementById("cases1").innerHTML = dailyVirus[0].cases;
document.getElementById("newCases1").innerHTML = dailyVirus[0].newCases;
document.getElementById("death1").innerHTML = dailyVirus[0].death;
document.getElementById("newDeath1").innerHTML = dailyVirus[0].newDeath;

// dailyOverview[0] gets the first object, wrapped in braces {}.
// dailyOverview[1] would get the second object in braces.
// adding '.cases', '.newCases', etc. gets the property you want.

// dailyOverview ->

document.getElementById("cases").innerHTML = dailyOverview[0].cases;
document.getElementById("newCases").innerHTML = dailyOverview[0].newCases;
document.getElementById("death").innerHTML = dailyOverview[0].death;
document.getElementById("newDeath").innerHTML = dailyOverview[0].newDeath;