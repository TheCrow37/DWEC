export function crearPerfil(nombre, email, edad) {
    return {
        nombre: nombre,
        email: email,
        edad: edad
    };
}

export function esMayorDeEdad(usuario) {
    return usuario.edad >= 18;
}

export function obtenerMayoresDeEdad(usuarios) {
    return usuarios.filter(esMayorDeEdad);
}

export function calcularPromedioEdad(usuarios) {
    const sumaEdades = usuarios.reduce((suma, usuario) => {
        return suma + usuario.edad;
    }, 0);

    return sumaEdades / usuarios.length;
}

function mostrarPerfil(usuario) {
    return `Nombre: ${usuario.nombre}, Email: ${usuario.email}, Edad: ${usuario.edad}`;
}

export default mostrarPerfil;
