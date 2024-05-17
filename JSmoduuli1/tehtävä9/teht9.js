'use strict'

const number = prompt("Enter a number:");
let result;

if (number < 2) {
  result = number + " is not a prime number.";
} else {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  result = isPrime ? number + " is a prime number." : number + " is not a prime number.";
}

document.querySelector('#result').innerHTML = result;