const {
    agregarLibro,
    obtenerLibros,
    buscarLibro,
    eliminarLibro,
    calcularTotalPaginas,
    ordenarPorPaginas
} = require("./biblioteca.js");

console.log("Colección inicial:");
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

console.log("\nNúmero total de páginas:", totalPaginas);

console.log("\nColección antes de ordenar:");
console.log(obtenerLibros());

ordenarPorPaginas();

console.log("\nColección después de ordenar por número de páginas:");
console.log(obtenerLibros());