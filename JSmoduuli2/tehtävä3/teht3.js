'use strict'

let dogs = [];

for (let i = 0; i < 6; i++) {
  dogs[i] = prompt("Enter the name of dog " + (i + 1) + ":");
}

dogs.sort().reverse();

let ul = document.createElement('ul');
for (let i = 0; i < dogs.length; i++) {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(dogs[i]));
  ul.appendChild(li);
}

document.querySelector('#dogs').appendChild(ul);