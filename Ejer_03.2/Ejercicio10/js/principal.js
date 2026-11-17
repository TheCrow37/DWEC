const cantidad = document.getElementById('cantidad');
const resultado = document.getElementById('resultado');
const textoLorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae sem at erat tincidunt consequat. Sed posuere, neque non facilisis volutpat, justo nibh consequat purus, sed blandit mi ligula vel sapien.';
document.getElementById('generar').addEventListener('click', () => {
  const numero = Math.max(0, Math.min(100, Number.parseInt(cantidad.value, 10) || 0));
  resultado.replaceChildren();
  const fragmento = document.createDocumentFragment();
  for (let indice = 0; indice < numero; indice++) {
    const parrafo = document.createElement('p'); parrafo.textContent = textoLorem; fragmento.append(parrafo);
  }
  resultado.append(fragmento);
});
