'use strict'

const year = prompt("Enter a year:");
let result;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      result = year + " is a leap year.";
    } else {
      result = year + " is not a leap year.";
    }
  } else {
    result = year + " is a leap year.";
  }
} else {
  result = year + " is not a leap year.";
}

document.querySelector('#result').innerHTML = result;