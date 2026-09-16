const nombre = "Kevin Daniel Arenas Perez";
let edad = 19;
const tieneMascota = true;

edad = 20;
const tieneMascota2 = false;

console.log(nombre, typeof nombre);
console.log(edad, typeof edad);
console.log(tieneMascota2, typeof tieneMascota2);

let frase = `${nombre} tiene ${edad} años y ${tieneMascota2 ? "tiene" : "no tiene"} mascota`

console.log(frase);
