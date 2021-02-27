function secondMatchesAmy(array) {
  if ( array[1] === 'Amy') {
    return "Second index matched!";
  }
  return "Second index not matched";
}

let names = ['Alexa', 'Amy', 'Francisco', 'Daniela', 'Piter', 'Javir'];

console.log(secondMatchesAmy(names));

let namess = ["Alex", "Amara", "Carlos"];
let names2 = ["Ali", "Amy", "Naresh"];
const result = secondMatchesAmy(namess);
const result2 = secondMatchesAmy(names2);
console.log(result);
console.log(result2);