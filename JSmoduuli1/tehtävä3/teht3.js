'use strict'

const number1=parseInt(prompt("Give me 1:st number"));
const number2=parseInt(prompt("Give me 2:nd number"));
const number3=parseInt(prompt("Give me 3:rd number"));
console.log(number1,number2,number3)

let sum, product,average;
    sum = number1 + number2 + number3;
    product = number1 * number2 *number3;
    average = sum / 3;

document.querySelector('#sum').innerHTML = sum;
document.querySelector('#product').innerHTML = product;
document.querySelector('#average').innerHTML = average;