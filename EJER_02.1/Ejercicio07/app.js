const {
    agregarLibro,
    obtenerLibros,
    buscarLibro,
    eliminarLibro,
    calcularTotalPaginas,
    ordenarPorPaginas,
    hayLibrosLargos,
    todosSonLibrosCortos
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

console.log("\n¿Hay algún libro con más de 500 páginas?");
console.log(hayLibrosLargos(500));

console.log("\n¿Todos los libros tienen menos de 1000 páginas?");
console.log(todosSonLibrosCortos(1000));

console.log("\n¿Hay algún libro con más de 900 páginas?");
console.log(hayLibrosLargos(900));

console.log("\n¿Todos los libros tienen menos de 100 páginas?");
console.log(todosSonLibrosCortos(100));