// 23. Mostrar el párrafo oculto al pulsar el título del curso de React.
const tarjetas = document.querySelectorAll('#lista-cursos .card');
const tarjetaReact = Array.from(tarjetas).find(tarjeta =>
  tarjeta.querySelector('h2')?.textContent.includes('React')
);
const tituloReact = tarjetaReact?.querySelector('h2');
const parrafoOculto = tarjetaReact?.querySelector('.oculto');
if (tituloReact && parrafoOculto) {
  tituloReact.addEventListener('click', () => parrafoOculto.classList.remove('oculto'));
}
