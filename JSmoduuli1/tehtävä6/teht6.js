'use strict'

let result;

if (confirm("Should I calculate the square root?")) {
  const number = prompt("Enter a number:");

  if (number < 0) {
    result = "The square root of a negative number is not defined.";
  } else {
    result = "The square root of " + number + " is " + Math.sqrt(number) + ".";
  }
} else {
  result = "The square root is not calculated.";
}

document.querySelector('#result').innerHTML = result;