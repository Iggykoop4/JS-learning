'use strict'

let candidates = [];
let numCandidates = Number(prompt("Enter the number of candidates:"));

for (let i = 0; i < numCandidates; i++) {
  let candidateName = prompt(`Name for candidate ${i + 1}:`);
  candidates.push({ name: candidateName, votes: 0 });
}

let numVoters = Number(prompt("Enter the number of voters:"));

for (let i = 0; i < numVoters; i++) {
  let vote = prompt(`Voter ${i + 1}, who do you vote for?`);
  if (vote) {
    let candidate = candidates.find(c => c.name === vote);
    if (candidate) {
      candidate.votes++;
    }
  }
}

candidates.sort((a, b) => b.votes - a.votes);

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
console.log("results:");
for (let candidate of candidates) {
  console.log(`${candidate.name}: ${candidate.votes} votes`);
}