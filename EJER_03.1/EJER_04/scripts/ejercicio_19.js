// 19. Desde el primer .info, subir a la tarjeta y seleccionar su primer hijo.
const primerInfo = document.querySelector('.card .info');
const tarjeta = primerInfo?.parentElement;
const primerHijo = tarjeta?.firstElementChild;
console.log(primerHijo);
