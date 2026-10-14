// 16. Desde el botón premium, subir al div.info que lo contiene.
const botonPremium = document.getElementById('btn-info-premium');
const contenedorInfo = botonPremium?.closest('.info');
console.log(contenedorInfo || 'No se encontró el contenedor .info.');
