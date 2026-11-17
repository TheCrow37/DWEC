const productos = document.getElementById('productos');
const carrito = document.getElementById('carrito');
const salidaTotal = document.getElementById('total');
function calcularTotal() {
  const suma = Array.from(carrito.querySelectorAll('li')).reduce((total, producto) => total + Number(producto.dataset.price), 0);
  salidaTotal.textContent = suma.toFixed(2);
}
productos.addEventListener('click', evento => {
  const boton = evento.target.closest('button[data-accion="anadir"]');
  if (!boton) return;
  const copia = boton.closest('li').cloneNode(true);
  copia.querySelector('button[data-accion="anadir"]').remove();
  const quitar = document.createElement('button'); quitar.type = 'button'; quitar.dataset.accion = 'quitar'; quitar.textContent = 'Quitar';
  copia.append(' ', quitar); carrito.append(copia); calcularTotal();
});
carrito.addEventListener('click', evento => {
  const boton = evento.target.closest('button[data-accion="quitar"]');
  if (!boton) return;
  boton.closest('li').remove(); calcularTotal();
});
calcularTotal();
