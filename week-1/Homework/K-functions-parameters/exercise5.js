// Declare your function here
function createLongGreeting(nombre, edad) {
    let saludar = `Hola, soy ${nombre} y tengo ${edad} años!!!`
    return saludar
};

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
