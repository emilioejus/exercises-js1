
let dirtyArray = [100, "iSMael", 55, 45, "sANyiA", 66,
"1JaMEs", "eLAmIn", 23, "IsMael", 67, 19,
"ElaMIN"];

let cleanArray = [];

let clearAndUpper = (arr, vacuumArray) => {
    let filterString = elemnt => {
        if(typeof elemnt === typeof "string") {
            return vacuumArray.push(elemnt.toUpperCase() + "!")
        }       
    }
    arr.filter(filterString) 
    return cleanArray
}

console.log(clearAndUpper(dirtyArray, cleanArray));

console.log(cleanArray);