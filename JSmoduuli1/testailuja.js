'use strict'

function greet(text, times) {
    for (let i = 1; i <= times; i++) {
        console.log(text + ' ' + i + '. time!');
    }

}

greet("sup", 10)