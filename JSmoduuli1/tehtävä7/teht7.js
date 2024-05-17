'use strict'

const numRolls = prompt("Enter the number of dice rolls:");
let sum = 0;

for (let i = 0; i < numRolls; i++) {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log("Dice roll " + (i+1) + ": " + roll);
  sum += roll;
}

console.log("The sum of the dice rolls is " + sum + ".");
document.querySelector('#result').innerHTML = "The sum of the dice rolls is " + sum + ".";