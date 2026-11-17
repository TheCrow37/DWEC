const frutas = document.getElementById('frutas');
document.getElementById('ordenar').addEventListener('click', () => {
  const elementos = Array.from(frutas.querySelectorAll('li'));
  elementos.sort((a, b) => a.textContent.localeCompare(b.textContent, 'es'));
  frutas.replaceChildren(...elementos);
});
