
let classEn = ['Leon', 'Manuel', 'Emilio', 'Diego', 'Giomar', 'Ronar', 'Fode', 'Juan', 'Toño', 'Adrian', 'Diana', 'Jaime'];
let classSp = ['Vincent', 'Carlos', 'Enian', 'Yogi', 'David'];

let combin = classEn.concat(classSp);
console.log(combin);

let ordenar = [... combin].sort();
console.log(ordenar);


let presente = function (names, combin) {
    if(combin.includes(names)) {
        combin.
        return `${names} esta en la clase!! con: ${combin.join(", ")}`
    }else {
        return `${names} no esta en la clase!!`
    }
}

console.log(presente('Emilio', combin));