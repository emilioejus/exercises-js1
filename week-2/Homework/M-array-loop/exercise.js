/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function print(arr) {
  if(arr.indexOf("T") > -1) {
    return console.log(arr)
  }else {
    return `${arr} no contiene la letra T de inicio`
  }
}
for(let i = 0; i < daysOfWeek.length; i++) {
  print(daysOfWeek[i])
}
