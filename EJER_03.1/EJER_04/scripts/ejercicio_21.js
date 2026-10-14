// 21. Mostrar una alerta al pulsar el botón premium.
const botonPremium = document.getElementById('btn-info-premium');
if (botonPremium) {
  botonPremium.addEventListener('click', () => {
    alert('Accediendo a información exclusiva para miembros premium');
  });
}
