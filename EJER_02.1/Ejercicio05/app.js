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

const libroBuscado = buscarLibro(3);

console.log("\nLibro encontrado:");
console.log(libroBuscado);

eliminarLibro(5);

console.log("\nColección final:");
console.log(obtenerLibros());

const totalPaginas = calcularTotalPaginas();

console.log("Número total de páginas:", totalPaginas);