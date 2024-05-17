'use strict'

function concat(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

let names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
let result = concat(names);

let p = document.createElement('p');
p.appendChild(document.createTextNode(result));
document.querySelector('#concatResult').appendChild(p);