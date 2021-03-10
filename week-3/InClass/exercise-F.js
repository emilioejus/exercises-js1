let years = [1964, 2008, 1999, 2005, 1978,1985, 1919];

let saber = (elemnt) => {
    let mayor = 17;
    let aYears = 2021;
    let age = aYears - elemnt;
    let puede = mayor -age;

    if(age >= 17){
        return `Los nacidos en el año ${elemnt} pueden manejar` 
    }else {
        return `Los nacidos en el año ${elemnt} pueden manejar en ${puede} años`
    }
}
let permisos = years.map(saber)
console.log(permisos);
