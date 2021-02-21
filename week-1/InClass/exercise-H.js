let names = "Emilio"

function saludar(name) {
    let saluda = "Hola, soy "
    console.log(saluda + name);
}

saludar(names);
saludar("Luis");

//Function saluda y expone la edad

function saludar(nombre,edad) {
    let saludo = `hola, un gusto soy ${nombre} y tengo ${edad}`
    return saludo
};

console.log(saludar("Emilio", 32))

// calcular

function sums(x, y) {
    let sum = x + y
    return sum
};

function ress(x, y) {
    let res = x + y
    return res
}

function cal(sums, res) {
    
}
