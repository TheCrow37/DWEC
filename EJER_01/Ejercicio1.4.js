let ciudades = ["Madrid", "Buenos Aires", "Tokio", "Nueva York", "París"];

ciudades.push ("Roma");

let ciudadesMayuscula = ciudades.map(ciudad => ciudad.toUpperCase());

let ciudadesFiltradas = ciudades.filter(ciudad => ciudad.length > 6);

console.log(ciudades);
console.log(ciudadesMayuscula);
console.log(ciudadesFiltradas);