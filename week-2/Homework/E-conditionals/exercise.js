/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";
let stu = "estudiante"

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

function im(roles) {
  if(roles === 'mentor') {
    return `Hi, I'm ${name}, I'm ${roles}`
  }else {
    return `Hi, I'm ${name}, I'm ${stu}`
  }
}
console.log(im(danielsRole));
console.log(im(name));





function idd(role, names) {
  if(role === "mentor") {
    return `Hi, I'm ${names}, I'm ${role}`
  }else {
   return `Hi, I'm ${names}, I'm ${role}`
  }
}
console.log(idd(danielsRole,name));
console.log(idd(stu, "Roberto"));
