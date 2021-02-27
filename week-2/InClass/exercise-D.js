function animo(say) {
    if(say === "happy"){
        return console.log("Good job")
    } else if(say === "sad") {
        return console.log("Every cloud has a silver lining")
    } else if(typeof say === "number") {
        return console.log("Beep beep boop")
    } else {
        return console.log("Iḿ sorry, i'm still learning about feelings")
    }
    
}
animo("sad");