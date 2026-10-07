const {
    agregarEmpleado,
    eliminarEmpleado,
    buscarPorDepartamento,
    calcularSalarioPromedio,
    obtenerEmpleadosOrdenadosPorSalario
} = require("./empleados.js");

console.log("Sistema de gestión de empleados");

// Añadimos varios empleados
agregarEmpleado({
    id: 3,
    nombre: "Laura Martínez",
    departamento: "Recursos Humanos",
    salario: 26000
});

agregarEmpleado({
    id: 4,
    nombre: "Pedro Fernández",
    departamento: "Informática",
    salario: 35000
});

agregarEmpleado({
    id: 5,
    nombre: "Marta Sánchez",
    departamento: "Ventas",
    salario: 30000
});

agregarEmpleado({
    id: 6,
    nombre: "Javier Rodríguez",
    departamento: "Informática",
    salario: 32000
});

console.log("\nEmpleados del departamento de Informática:");
console.log(buscarPorDepartamento("Informática"));

console.log("\nSalario promedio:");
console.log(calcularSalarioPromedio());

console.log("\nEmpleados ordenados por salario:");
console.log(obtenerEmpleadosOrdenadosPorSalario());

// Eliminamos un empleado
eliminarEmpleado(3);

console.log("\nEmpleados después de eliminar al empleado con ID 3:");
console.log(obtenerEmpleadosOrdenadosPorSalario());

