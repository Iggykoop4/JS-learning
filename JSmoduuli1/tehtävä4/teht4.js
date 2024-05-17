'use strict'

const name = prompt("What's your name?");

document.querySelector('#greeting').innerHTML = "let's see which house you belong to, " + name + '!';

const hat = Math.floor(Math.random() * 4 +1);
console.log(hat)

let house;
switch (hat){
    case 1:
        house = "Slytherin";
        break;
    case 2:
        house = "Hufflepuff";
        break;
    case 3:
        house = "Ravenclaw";
        break;
    case 4:
        house = "Gryffindorks";
        break;
    default:
        house = "None";
}

console.log(`${name}, The hat picks you into ${house}`)
document.querySelector("#house").innerHTML = "The sortinghat has put you into, " + house + "!!!";

