'use strict'

let numbers = [];
let num;

while (true) {
  num = Number(prompt("Enter a number:"));
  if(numbers.includes(num)) {
    console.log("The number has already been given.");
    break;
  } else {
    numbers.push(num);
  }
}

numbers.sort((a, b) => a - b);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}