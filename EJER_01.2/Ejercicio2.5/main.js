import mostrarPerfil, {
    crearPerfil,
    esMayorDeEdad,
    obtenerMayoresDeEdad,
    calcularPromedioEdad
} from "./gestorUsuarios.js";

// Creamos al menos 5 usuarios
const usuarios = [
    crearPerfil("Ana", "ana@email.com", 25),
    crearPerfil("Carlos", "carlos@email.com", 17),
    crearPerfil("Lucía", "lucia@email.com", 30),
    crearPerfil("Pedro", "pedro@email.com", 16),
    crearPerfil("Marta", "marta@email.com", 20)
];

// Obtener usuarios mayores de edad
const mayoresDeEdad = obtenerMayoresDeEdad(usuarios);

// Mostrar usuarios mayores de edad
console.log("Usuarios mayores de edad:");

mayoresDeEdad.forEach(usuario => {
    console.log(mostrarPerfil(usuario));
});

// Calcular y mostrar la edad promedio
const promedioEdad = calcularPromedioEdad(usuarios);

console.log(`La edad promedio de los usuarios es: ${promedioEdad}`);
