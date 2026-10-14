// 8. Seleccionar directamente el segundo enlace de navegación y mostrar su texto.
const segundoEnlace = document.querySelector('.navegacion a:nth-child(2)');
console.log(segundoEnlace ? segundoEnlace.textContent : 'No se encontró el segundo enlace.');
