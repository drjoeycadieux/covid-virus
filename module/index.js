/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */

const dailyOverview = [{
	date: '2021-09-10',
	cases: 395155,
	newCases: 879,
	death: 11301,
	newDeath: 4,
}];


const dailyHospitalizations = [{
	date: '2021-09-10',
	hospitalizations: 207,
}];


const dailyVaccination = [{
	date: '2021-09-10',
	vaccination: 12570901,
}];

const dailyTotalVaccination = [{
	date: '2021-09-10',
	totalvaccination: 77.1,
}];


const dailyVirus = [{
	date: '2021-09-10',
	cases: 10155,
	newCases: 10290,
	death: 9579,
	newDeath: 39830,
}];

// dailyVirus ->

document.getElementById("cases1").innerHTML = dailyVirus[0].cases;
document.getElementById("newCases1").innerHTML = dailyVirus[0].newCases;
document.getElementById("death1").innerHTML = dailyVirus[0].death;
document.getElementById("newDeath1").innerHTML = dailyVirus[0].newDeath;

// dailyOverview[0] gets the first object, wrapped in braces {}.
// dailyOverview[1] would get the second object in braces.
// adding '.cases', '.newCases', etc. gets the property you want.

document.getElementById("vaccination").innerHTML = dailyVaccination[0].vaccination;

document.getElementById("hospitalizations").innerHTML = dailyHospitalizations[0].hospitalizations;


document.getElementById("totalvaccination").innerHTML = dailyTotalVaccination[0].totalvaccination;

// dailyOverview ->

document.getElementById("cases").innerHTML = dailyOverview[0].cases;
document.getElementById("newCases").innerHTML = dailyOverview[0].newCases;
document.getElementById("death").innerHTML = dailyOverview[0].death;
document.getElementById("newDeath").innerHTML = dailyOverview[0].newDeath;