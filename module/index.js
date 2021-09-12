/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */



// dailyOverview[0] gets the first object, wrapped in braces {}.
// dailyOverview[1] would get the second object in braces.
// adding '.cases', '.newCases', etc. gets the property you want.

const dailyOverview = [{
	date: '2021-09-10',
	cases: 396034,
	newCases: 879,
	death: 11301,
	newDeath: 4,
}];

const dailyMontreal = [{
	date: '2021-09-10',
	positiveCases: 268,
	totalDeath: 4778,
}];

const dailyEverything = [{
	date: '2021-09-10', // never change the date
	hospitalizations: 207,
	vaccination: 12570901,
	totalRecovered: 378721,
	totalVaccination: 771,
	activeCases: 6012,
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

// dailyEverything ->

document.getElementById("activeCases").innerHTML = dailyEverything[0].activeCases;

document.getElementById("totalDeath").innerHTML = dailyMontreal[0].totalDeath;

document.getElementById("totalRecovered").innerHTML = dailyEverything[0].totalRecovered;

document.getElementById("vaccination").innerHTML = dailyEverything[0].vaccination;

document.getElementById("hospitalizations").innerHTML = dailyEverything[0].hospitalizations;


document.getElementById("totalVaccination").innerHTML = dailyEverything[0].totalVaccination;


document.getElementById("positiveCases").innerHTML = dailyMontreal[0].positiveCases;

// dailyOverview ->

document.getElementById("cases").innerHTML = dailyOverview[0].cases;
document.getElementById("newCases").innerHTML = dailyOverview[0].newCases;
document.getElementById("death").innerHTML = dailyOverview[0].death;
document.getElementById("newDeath").innerHTML = dailyOverview[0].newDeath;