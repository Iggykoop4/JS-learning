'use strict'

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let result;
let ul = document.createElement('ul');

do {
  result = rollDice();
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(result));
  ul.appendChild(li);
} while (result !== 6);

document.querySelector('#diceRolls').appendChild(ul);