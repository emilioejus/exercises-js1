

function form(a, b) {
    if(a[0] === 'a' || a[0] === 'e' || a[0] === 'i' || a[0] === 'o' || a[0] === 'u'   && a.length >= 5 && a.length <= 10 ) {
        return "Username  Valid"
    }else if(b === "admin" || b === "manager") {
        return "Username  Valid"
    }
    else {
        return "Username ivalid"
    }

}

console.log(form("aaqqqnilo", "User"));
console.log(form("Rob", "admin"));


function formMayuscula(a, b) {
    if(a[0] === a[0].toUpperCase()  && a.length >= 5 && a.length <= 10 ) {
        return "Username  Valid"
    }else if(b === "admin" || b === "manager") {
        return "Username  Valid"
    }
    else {
        return "Username ivalid"
    }

}

console.log(formMayuscula("Aaaqnilo", "user"));
console.log(formMayuscula("Rob", "admin"));
