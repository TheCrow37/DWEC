// 6. Encontrar el párrafo que contiene el atributo data-precio.
const parrafoPrecio = document.querySelector('p[data-precio]');
console.log(parrafoPrecio ? parrafoPrecio.textContent : 'No se encontró el párrafo con data-precio.');
