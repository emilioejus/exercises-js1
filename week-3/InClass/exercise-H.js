let names = ['Juan', 'Diana', 'Adrian', 'Angelo'];

let arrayExiste = (arr, names) => {
    let exist = element => element === names;
    
    if(arr.find(exist)) {
        return "Found me"
    }else {
        return 'havent found me :('
    }
}

console.log(arrayExiste(names, 'Juan'));
console.log(arrayExiste(names, 'Angelo'));
console.log(arrayExiste(names, 'David'));