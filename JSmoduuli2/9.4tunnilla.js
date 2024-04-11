//Funktiot



//perinteinen funktio määritelmä
function doSomething() {
  console.log("Doing something");
}



const doSomethingMore = function() {
  console.log("doing something else");
};

const doSomethingMore2 = () => {
  console.log("doing something else vol2");
};

doSomething();
doSomethingMore();
doSomethingMore2();

const ages = [4,55,36];

//vertailufunktio sort()-metodia varten
function compare(val1,val2){
  return val1 - val2;
}
console.log(compare(44,33));

console.log()

ages.sort(function(val1,val2) {
  return val1-val2;
});
ages.sort((val1,val2) => val1-val2);

console.log(ages)

//tulostaa arrayn sisällön ja palauttaa uuden taulukon käännetyssä järjestyksessä
function logArray(array) {
  //funktio sisälllä esitelty muuttuja äkyy vain funktion sisällä
  //const ages = [];
  //console.log(ages);
  console.log(array);
  const newArray = array.slice(0);
  newArray.reverse();
  return newArray;

}


const reversedAges = logArray(ages);


console.log("original",ages)
console.log("neversed",reversedAges)