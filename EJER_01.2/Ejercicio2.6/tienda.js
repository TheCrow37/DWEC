import resumenInventario, {
    crearProducto,
    filtrarPorCategoria,
    listarProductosAgotados,
    calcularValorTotalInventario
} from "./inventario.js";

// Creamos el inventario
const inventario = [];

// Añadimos productos
inventario.push(
    crearProducto("Portátil", "Electrónica", 800, 5),
    crearProducto("Ratón inalámbrico", "Electrónica", 25, 10),
    crearProducto("Camiseta", "Ropa", 20, 15),
    crearProducto("Pantalón", "Ropa", 40, 8),
    crearProducto("Zapatillas", "Ropa", 60, 0),
    crearProducto("JavaScript para principiantes", "Libros", 30, 6)
);

// 1. Productos de la categoría Ropa
const productosRopa = filtrarPorCategoria(inventario, "Ropa");

console.log("----- PRODUCTOS DE ROPA -----");
console.log(productosRopa);

// 2. Productos agotados
const productosAgotados = listarProductosAgotados(inventario);

console.log("----- PRODUCTOS AGOTADOS -----");
console.log(productosAgotados);

// 3. Valor total del inventario
const valorTotal = calcularValorTotalInventario(inventario);

console.log("----- VALOR TOTAL -----");
console.log(`El valor total del inventario es: ${valorTotal.toFixed(2)} €`);

// 4. Resumen completo
resumenInventario(inventario);
