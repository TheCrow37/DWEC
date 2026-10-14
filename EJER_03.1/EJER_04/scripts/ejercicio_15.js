// 15. Seleccionar la tarjeta vecina que sigue a la primera tarjeta.
const primeraTarjeta = document.querySelector('#lista-cursos .card');
console.log(primeraTarjeta ? primeraTarjeta.nextElementSibling : null);
