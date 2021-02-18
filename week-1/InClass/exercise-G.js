let numberOfStudents = 15;
let numberOfMentors = 8;
let numeroTotal = numberOfMentors + numberOfStudents;
let pEstudiantes = Math.round((numberOfStudents /numeroTotal) * 100);
let pMentores = Math.round((numberOfMentors /numeroTotal) * 100)


console.log(`El numero de estudiantes es ${numberOfStudents}`);
console.log(`El numero de mentores ${numberOfMentors}`);
console.log(`El numero total es ${numeroTotal}`)


console.log(`Porcenjate de estudiantes: ${pEstudiantes}%`)
console.log(`Porcenjate de mentores: ${pMentores}%`)