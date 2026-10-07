const { agregarLibro, obtenerLibros } = require("./biblioteca.js")

console.log("Coleccion inicial: ");
console.log(obtenerLibros());

const nuevoLibro = {
    id: 11,
    titulo: "Los juegos del hambre",
    autor: "Suzanne Collins",
    paginas: 374
};

agregarLibro(nuevoLibro);

console.log("\nColección después de añadir el nuevo libro:");
console.log(obtenerLibros());