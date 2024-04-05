'use strict';

console.log('I have awaken!');

let name = 'Masa';
const names = ['Aku', 'Iines', 'Heluna'];

let age, height;
age = 10.1;
height = 160;
console.log(age, typeof age, height, typeof height);

const isUnderAged = true;
console.log(isUnderAged, typeof isUnderAged)

//muutetaan number --> string
age = age.toString();
console.log(age);

//muutetaan string --> number
// age = parseInt(age); ottaa vain kokonaisluvun
age = parseFloat(age);
console.log(age, typeof age);

const ageAdd = 3;
//lisätään arvoon 1
age++;
//sama
age + 1;
age += 1;

console.log(age + ageAdd);

console.log(name + 'n ikä on ' + age + ' vuotta.');
console.log(`${name}n ikä on ${age} vuotta`);


console.log('Moi ' + name);
console.log('tulostetaan kaikki nimet ', name, names);

//alert('Moi ' + name);
//alert('toinen alertti');

const firstParagraphElement = document.querySelector('p');
console.log(firstParagraphElement);
firstParagraphElement.textContent = 'Moi ' + name;

const allParagraphElements = document.querySelectorAll('p');
console.log(allParagraphElements);
allParagraphElements[2].textContent = 'kolmas paragraph';

name = 'Aku';
allParagraphElements[2].textContent = 'Moi ' + name;

name = prompt('Anna nimi');
console.log(name, typeof name);

//Math
console.log(Math.random())

// arvotaan kokonaislukuna arvo väliltä 1-6
console.log(Math.floor(Math.random()*6+1));



