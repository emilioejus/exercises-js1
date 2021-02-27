//**Imprimir cada estudiante */

let estudiantes = ['Maria', 'Daniel', 'Pedro', 'Luisana', 'Julieta', 'Sofia', 'Angel', 'Tereza', 'Genesis', 'Jorge'];

function asistencia(names) {
    for(let i = 0; i < names.length; i++) {
        let presente = `${names[i]}: presente`
        console.log(presente);
    }
}

asistencia(estudiantes);

//**Codigo de estudiante */

let c_Estudiantes =[];

function agregar(c) {
    for(let i = 0; i < 20; i++) {
        let cont = c.push(i);
        console.log(cont);
    }
}

agregar(c_Estudiantes);
console.log(c_Estudiantes);



//** Example */

const daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",];

for (let i = 0; i < daysOfWeek.length; i++) {
    const dayMessage = "day is: " +daysOfWeek[i];
    const indexMessage = "index is: " + i;
    console.log(indexMessage, dayMessage);
}

























