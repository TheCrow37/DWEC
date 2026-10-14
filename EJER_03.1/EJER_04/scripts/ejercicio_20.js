// 20. Desde el segundo enlace, llegar al h1 y cambiar su color a naranja.
const segundoEnlace = document.querySelector('.navegacion a:nth-child(2)');
const cabecera = segundoEnlace?.parentElement?.parentElement;
const titulo = cabecera?.querySelector('h1');
if (titulo) titulo.style.color = 'orange';
