var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

let nunMentor = 5;
let numAlumnos = 9;
let totalClas = nunMentor + numAlumnos;
let porcentaje = 100;

/* function para regla de 3 */
function regla_de_3(a, b, c)  {
    let cal = (a / b) * c
    return Math.round(cal)
};

//** porcentaje de mentores */
console.log(`El porcentaje de mentores es ${regla_de_3(nunMentor, totalClas, porcentaje)}%`);

//**Porcentaje de alumnos */
console.log(`El porcentaje de alumnos es ${regla_de_3(numAlumnos, totalClas, porcentaje)}%`)

//** Imprimir nombres en mayusculas */
function unpperr(varl) {
    let name_upper = varl.toUpperCase()
    return `Hola Sr./Sra. ${name_upper}`
}

console.log(unpperr(mentor1));
console.log(unpperr(mentor2));
console.log(unpperr(mentor3));
console.log(unpperr(mentor4));
console.log(unpperr(mentor5));



/* bloque de puebas

// cantidad de alumnos
let cant_d_mentores = 5;
let porc_d_mentores = 35;
let porc_d_estudiantes = 75;
console.log(`Cantidad de estudiantes ${regla_de_3(cant_d_mentores, porc_d_mentores, porc_d_estudiantes)}`)

// porcentaje de mentores 
let cant_d_studiantes = regla_de_3(cant_d_mentores, porc_d_mentores, porc_d_estudiantes);
let total_clas = cant_d_mentores + cant_d_studiantes;
let total_porc_clas = 100;
console.log(`El porcentaje de mentores es ${regla_de_3(total_clas, total_porc_clas, cant_d_mentores)}`);

*/


/*let stu = cantidad(5);
let men = 5;
let total = stu + men;

function pmen(men) {
    let tp = 100;
    let t = total;
    let m = men;
    let p = (m * tp) / t
    return console.log(`El porcentaje de los mentores es ${Math.round(p)}%`)
}

pmen(men);*/






