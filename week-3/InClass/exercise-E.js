
let años = [1964, 2008, 1999, 2005, 1978,1985, 1919];
let añoActual = 2021
let dev = element => añoActual - element;

function retornoYears(years) {
    return years.map(dev) 
}

console.log(retornoYears(años));