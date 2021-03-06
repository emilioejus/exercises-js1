function rever(arr) {
    let cadena = arr.split("");
    
    return cadena.reverse().join("");
}

console.log(rever("hola"))


function elm(arr) {
    let cadena =  arr.split("");
    cadena.pop();
    cadena.shift();
    return cadena.join("");
}

console.log(elm("Fernando"));


function elmm(arr) {
    let cadena =  arr.split("");
    cadena.splice(0, 1);
    cadena.splice(cadena.length -1, 1)
    return cadena.join("");
}

console.log(elmm("Fernando"))