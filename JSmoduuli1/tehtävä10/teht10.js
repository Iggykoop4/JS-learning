'use strict'

const numDice = Number(prompt("Enter the number of dice:"));
const targetSum = Number(prompt("Enter the target sum:"));
const numSimulations = 10000;
let numSuccesses = 0;

for (let i = 0; i < numSimulations; i++) {
  let sum = 0;
  for (let j = 0; j < numDice; j++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    sum += roll;
  }
  if (sum === targetSum) {
    numSuccesses++;
  }
}

const probability = (numSuccesses / numSimulations * 100).toFixed(2);

document.querySelector('#result').innerHTML = "Probability to get sum " + targetSum + " with " + numDice + " dice is " + probability + "%.";