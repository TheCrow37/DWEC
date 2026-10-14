// 25. Aplicar fondo gris a las tarjetas de la categoría Desarrollo Web.
document.querySelectorAll('#lista-cursos .card').forEach(tarjeta => {
  const categoria = tarjeta.querySelector('.categoria');
  if (categoria?.textContent.trim() === 'Desarrollo Web') {
    tarjeta.style.backgroundColor = '#f0f0f0';
  }
});
