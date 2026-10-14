// 27. Poner borde negro punteado a las tarjetas que no sean premium.
const tarjetasNoPremium = Array.from(document.querySelectorAll('#lista-cursos .card'))
  .filter(tarjeta => !tarjeta.classList.contains('premium'));
tarjetasNoPremium.forEach(tarjeta => {
  tarjeta.style.border = '2px dotted black';
});
