// 32. Añadir la clase imagen-curso a la imagen de cada tarjeta.
document.querySelectorAll('#lista-cursos .card').forEach(tarjeta => {
  const imagen = tarjeta.querySelector('img');
  if (imagen) imagen.classList.add('imagen-curso');
});
