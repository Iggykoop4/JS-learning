'use strict'

let numbers = [];

for (let i = 0; i < 5; i++) {
  numbers[i] = prompt("Enter a number:");
}

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}