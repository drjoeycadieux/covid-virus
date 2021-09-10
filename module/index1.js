/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */


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