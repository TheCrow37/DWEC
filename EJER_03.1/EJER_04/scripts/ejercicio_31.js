// 31. Añadir el texto de oferta al párrafo oculto de la tarjeta de React.
const tarjetaReact = Array.from(document.querySelectorAll('#lista-cursos .card'))
  .find(tarjeta => tarjeta.querySelector('h2')?.textContent.includes('React'));
const parrafoOculto = tarjetaReact?.querySelector('.oculto');
if (parrafoOculto && !parrafoOculto.textContent.includes('(¡Oferta especial!)')) {
  parrafoOculto.textContent += ' (¡Oferta especial!)';
}
