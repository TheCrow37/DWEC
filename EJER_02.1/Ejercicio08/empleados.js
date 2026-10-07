const empleados = [
    {
        id: 1,
        nombre: "Ana García",
        departamento: "Informática",
        salario: 28000
    },
    {
        id: 2,
        nombre: "Carlos López",
        departamento: "Ventas",
        salario: 24000
    }
];

function agregarEmpleado(empleado) {
    empleados.push(empleado);
}

function eliminarEmpleado(id) {
    const indice = empleados.findIndex(empleado => empleado.id === id);

    if (indice !== -1) {
        empleados.splice(indice, 1);
    }
}

function buscarPorDepartamento(departamento) {
    return empleados.filter(
        empleado => empleado.departamento === departamento
    );
}

function calcularSalarioPromedio() {
    if (empleados.length === 0) {
        return 0;
    }

    const total = empleados.reduce(
        (suma, empleado) => suma + empleado.salario,
        0
    );

    return total / empleados.length;
}

function obtenerEmpleadosOrdenadosPorSalario() {
    return [...empleados].sort(
        (a, b) => b.salario - a.salario
    );
}

module.exports = {
    agregarEmpleado,
    eliminarEmpleado,
    buscarPorDepartamento,
    calcularSalarioPromedio,
    obtenerEmpleadosOrdenadosPorSalario
};
