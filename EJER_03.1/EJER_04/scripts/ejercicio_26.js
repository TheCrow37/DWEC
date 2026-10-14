// 26. Crear y añadir un párrafo de duración al final de cada .info.
document.querySelectorAll('#lista-cursos .card .info').forEach(info => {
  const duracion = document.createElement('p');
  duracion.classList.add('duracion');
  duracion.textContent = 'Duración: 20 horas';
  info.appendChild(duracion);
});
