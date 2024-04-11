'use strict'

console.log("I'm printing to console!");

const name = prompt("What's your name?");
console.log(`Hello ${name}!`);
document.querySelector('#greeting').innerHTML = 'Good morning, ' + name + '!';