
let years = [1964, 2008, 1999, 2005, 1978,1985, 1919];
let s = [];
let can = element => {
    let yearsC = 2021
    let edad = yearsC - element
    if(edad >= 17) {
        return element;
    }else {
        return false
    }
}


let yearsD = (arr) => {

    return arr.filter(can)
}

console.log(yearsD(years))