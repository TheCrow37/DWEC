let estudiantes = [
    {nombre: "Alejandro", apellidos: "Ramirez Fernandez", calificacion: 4.5, aprobado: true },
    {nombre: "Sebastian", apellidos: "Torres Perez", calificacion: 7.8, aprobado: true},
    {nombre: "Carolina", apellidos: "Espejo Martinez", calificacion: 9.3, aprobado: true}
];

const estudiantesConId = estudiantes.map((estudiante, index) => {
    return {
        id: index + 1,
        ...estudiante 
    };
});

console.log("Estudiantes con ID: ");
console.log(estudiantesConId);

const estudiantesAprobados = estudiantesConId.filter(
    (estudiante) => estudiante.calificacion >= 5
);

console.log("\nMensajes de felicitacion: ");
estudiantesAprobados.forEach((estudiante) => {
    console.log(`¡ Felicidades ${estudiante.nombre}, has aprobado con ${estudiante.calificacion}!`); 
});

console.log("\nVerificacion de Coherencia: ");
estudiantes.forEach((estudiante) => {
    const deberiaEstarAprobado = estudiante.calificacion >= 5;

    if (estudiante.aprobado !== deberiaEstarAprobado) {
        console.log(
            `⚠️ Incoherencia en el registro de ${estudiante.nombre}: calificacion = ${estudiante.calificacion}, aprobado = ${estudiante.aprobado}`
        );
    }
});