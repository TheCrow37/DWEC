const cursos = [
    {
        nombre: "Matemáticas",
        profesor: "Carlos Ruiz",
        estudiantes: [
            {nombre: "Ana", calificacion: 8 },
            {nombre: "Luis", calificacion: 6.5},
            {nombre: "Marta", calificacion: 9 }
        ]
    },
    {
        nombre: "Historia",
        profesor: "Elena Vidal",
        estudiantes: [
            {nombre: "Pedro", calificacion: 3.5 },
            {nombre: "Laura", calificacion: 5 },
            {nombre: "Jorge", calificacion: 6 }
        ]
    },
    {
        nombre: "Programacion",
        profesor: "Sofia Marin",
        estudiantes: [
            {nombre: "Diego", calificacion: 9.5 },
            {nombre: "Paula", calificacion: 8.5 },
            {nombre: "Ivan", calificacion: 7.8 }
        ]
    },
    {
        nombre: "Quimica",
        profesor: "Roberto Paz",
        estudiantes: [
            {nombre: "Sara", calificacion: 4.5 },
            {nombre: "Nico", calificacion: 3.2 },
            {nombre: "Elsa", calificacion: 5.5 }
        ]
    }
];

const resumenCursos = cursos.map((curso) => {
    const suma = curso.estudiantes.reduce(
        (acumulado, estudiante) => acumulado + estudiante.calificacion,
        0
    );

    const promedio = suma / curso.estudiantes.length;

    return {
        nombre: curso.nombre,
        promedioCalificaciones: promedio,
    };
});

console.log("Resumen de cursos: ");
console.log(resumenCursos);

const cursosDestacados = resumenCursos.filter(
    (curso) => curso.promedioCalificacion >=7
);

console.log("\nCursos destacados: ");
cursosDestacados.forEach((cursos) =>{
    console.log(
    `📘 El curso ${curso.nombreCurso} tiene un promedio de ${curso.promedioCalificaciones} y es considerado destacado.`
    );
});

console.log("\nVerificacion de calificaciones bajas: ");
cursos.forEach((curso) => {
    const hayCalificacionesBajas = curso.estudiantes.some(
        (estudiante) => estudiante.calificacion < 4
    );

    if (hayCalificacionesBajas) {
        console.log(
            `⚠️ Atención: En el curso ${curso.nombre} hay estudiantes con calificaciones muy bajas.`
        );
    }
});