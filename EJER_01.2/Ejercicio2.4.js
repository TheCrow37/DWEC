const usuario = {
    nombre: "Ana",
    email: "ana@email.com"
};

const perfil = {
    puesto: "Desarrolladora",
    empresa: "Tech Solutions"
};

// Combinamos ambos objetos
const empleado = {
    ...usuario,
    perfil: {
        ...perfil
    }
};

// Accedemos a ciudad de forma segura
const ciudad = empleado.perfil?.direccion?.ciudad ?? "Ciudad no especificada";

console.log(empleado);
console.log(ciudad);
