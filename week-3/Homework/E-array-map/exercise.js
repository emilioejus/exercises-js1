// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let x100v = numbers.map(function (nun) {
    return nun * 1000
})

let x100 = numbers.map(num => num * 100)


console.log(x100v)
console.log(x100)
