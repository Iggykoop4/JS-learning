'use strict'

let numParticipants = Number(prompt("Enter the number of participants:"));
let participants = [];

for (let i = 0; i < numParticipants; i++) {
  participants[i] = prompt("Enter the name of participant " + (i + 1) + ":");
}

participants.sort();

let ol = document.createElement('ol');
for (let i = 0; i < participants.length; i++) {
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(participants[i]));
  ol.appendChild(li);
}

document.querySelector('#participants').appendChild(ol);