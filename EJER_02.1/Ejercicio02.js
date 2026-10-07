const playlist = [
    { titulo: "Blinding Lights", artista: "The Weeknd", duracion: 200 },
    { titulo: "Shape of You", artista: "Ed Sheeran", duracion: 234 },
    { titulo: "Bad Guy", artista: "Billie Eilish", duracion: 194 },
    { titulo: "Levitating", artista: "Dua Lipa", duracion: 203 },
    { titulo: "As It Was", artista: "Harry Styles", duracion: 167 },
    { titulo: "Watermelon Sugar", artista: "Harry Styles", duracion: 174 },
    { titulo: "Stay", artista: "The Kid LAROI & Justin Bieber", duracion: 141 },
    { titulo: "Havana", artista: "Camila Cabello", duracion: 217 },
    { titulo: "Believer", artista: "Imagine Dragons", duracion: 204 },
    { titulo: "Perfect", artista: "Ed Sheeran", duracion: 263 }
];

const cancionesLargas = playlist.filter((cancion) => {
    return cancion.duracion > 180;
});

const mensajes = cancionesLargas.map((cancion) => {
    return `La canción '${cancion.titulo}' de ${cancion.artista} dura ${cancion.duracion} segundos.`;
})

console.log(mensajes);