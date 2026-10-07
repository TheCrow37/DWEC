const libros = [
    {id: 1, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", paginas: 863 },
    { id: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 417 },
    { id: 3, titulo: "1984", autor: "George Orwell", paginas: 328 },
    { id: 4, titulo: "El principito", autor: "Antoine de Saint-Exupéry", paginas: 96 },
    { id: 5, titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", paginas: 576 },
    { id: 6, titulo: "Orgullo y prejuicio", autor: "Jane Austen", paginas: 432 },
    { id: 7, titulo: "Crónica de una muerte anunciada", autor: "Gabriel García Márquez", paginas: 128 },
    { id: 8, titulo: "El Hobbit", autor: "J. R. R. Tolkien", paginas: 310 },
    { id: 9, titulo: "Fahrenheit 451", autor: "Ray Bradbury", paginas: 256 },
    { id: 10, titulo: "La casa de los espíritus", autor: "Isabel Allende", paginas: 448 }
];

function agregarLibro(nuevoLibro) {
    libros.push(nuevoLibro);
};

function obtenerLibros() {
    return libros;
};

function buscarLibro(id) {
    return libros.find(libro => libro.id === id);
};

function eliminarLibro(id) {
    const indice = libros.findIndex(libro => libro.id === id);

    if (indice !== -1) {
        libros.splice(indice, 1);
    }
};

function calcularTotalPaginas() {
    return libros.reduce((total, libro) => total + libros.paginas, 0);
};

function ordenarPorPaginas() {
    libros.sort((a, b) => a.paginas - b.paginas);
};

function hayLibrosLargos(limitePaginas) {
    return libros.some(libro => libro.paginas > limitePaginas);
};

function todosSonLibrosCortos(limitePaginas) {
    return libros.every(libro => libro.paginas < limitePaginas);
};

module.exports = {
    agregarLibro,
    obtenerLibros,
    buscarLibro,
    eliminarLibro,
    calcularTotalPaginas,
    ordenarPorPaginas,
    hayLibrosLargos,
    todosSonLibrosCortos
};

