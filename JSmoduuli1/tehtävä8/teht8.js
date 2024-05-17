'use strict'

const startYear = prompt("Enter the start year:");
const endYear = prompt("Enter the end year:");
let leapYears = "";

for (let year = startYear; year <= endYear; year++) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        leapYears += "<li>" + year + "</li>";
      }
    } else {
      leapYears += "<li>" + year + "</li>";
    }
  }
}

document.querySelector('#leapYears').innerHTML = leapYears;