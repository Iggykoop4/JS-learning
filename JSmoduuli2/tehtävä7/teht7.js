'use strict'

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

let sides = Number(prompt("Enter the number of sides on the dice:"));
let result;
let ul = document.createElement('ul');

do {
  result = rollDice(sides);
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(result));
  ul.appendChild(li);
} while (result !== sides);

document.querySelector('#diceRolls').appendChild(ul);