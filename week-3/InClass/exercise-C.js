const { clear } = require("console");

function abracaFunction1(yourFunc) {
    let upper = element => element.toUpperCase()
    return yourFunc.map(upper)
}

    

const abracaArray = ["James","Elamin","Ismael","Sanyia","Chris","Antigoni",  ];

console.log(abracaFunction1(abracaArray));




function abracaFunction(yourFunc) {
    
    
    
    console.log("I am abracaFunction! Watch as I mutate anarray of strings to your heart's content!"  );

    const abracaArray = ["James","Elamin","Ismael","Sanyia","Chris","Antigoni",  ];

    const abracaOutput = yourFunc(abracaArray);
    return abracaOutput

}

let up = element => element.map(element => element.toUpperCase())

console.log(abracaFunction(up));