/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")

Passwords must not be any previous password in the passwords array. 

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

function validatePasswords(passwords) {
  let upper = element => element.charCodeAt() 

 
  let upper_ACSII = [65, 90];
  let lower_ACSII = [97, 122];
  let num_ACSII = [48, 57];
  let symbol_ASCII = [33,35,36,37,46,42,38]
  let answer = [];
  let cal = (ACSII) => {
    for(let i = ACSII[0] ; i  <= ACSII[1]; i++) {
      ACSII.push(i)
    }
  }
  let arryExist = [];
  let existInArray = (arrayElement, arrayList) => arrayList.indexOf(arrayElement) > -1
  
  cal(upper_ACSII)
  cal(lower_ACSII)
  cal(num_ACSII)
  let som = element => { 
    let asciiArray = element.split("").map(upper);
    
    if(element.length >= 5  &&
     asciiArray.some(x => upper_ACSII.includes(x)) &&
     asciiArray.some(x => lower_ACSII.includes(x)) && 
     asciiArray.some(x => num_ACSII.includes(x)) &&
     asciiArray.some(x => symbol_ASCII.includes(x)) &&
     !existInArray(element, arryExist)
     ) {
       answer.push(true)
    }else {
       answer.push(false)
    }
    arryExist.push(element);
  }
  passwords.map(som)

  return answer;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (util.isDeepStrictEqual(actual, expected)) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test(
  "validatePasswords function works - case 1",
  validatePasswords(passwords1),
  [false, false, true, false, false]
 );

test(
  "validatePasswords function works - case 2",
  validatePasswords(passwords2),
  [true, true, false, false, false]
);
