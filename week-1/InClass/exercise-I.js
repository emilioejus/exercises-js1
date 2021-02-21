function age( an) {
    let t = 2021 - an
    return t
}

function saludar(nombre,an) {
    let sal = `Hola soy ${nombre} y tengo ${age(an)} años`
    return sal
}

console.log( saludar("Emilio",1988 ))