const ciudades = [
  { ciudad: 'Madrid', pais: 'España' }, { ciudad: 'Barcelona', pais: 'España' },
  { ciudad: 'París', pais: 'Francia' }, { ciudad: 'Lyon', pais: 'Francia' },
  { ciudad: 'Roma', pais: 'Italia' }, { ciudad: 'Lisboa', pais: 'Portugal' }
];
const listaCiudades = document.getElementById('lista-ciudades');
const busqueda = document.getElementById('busqueda');
ciudades.forEach(({ ciudad, pais }) => {
  const elemento = document.createElement('li'); elemento.textContent = `${ciudad} — ${pais}`; elemento.dataset.pais = pais; listaCiudades.append(elemento);
});
function filtrarCiudades(texto) {
  const consulta = texto.trim().toLocaleLowerCase('es');
  listaCiudades.querySelectorAll('li').forEach(elemento => {
    elemento.hidden = !elemento.dataset.pais.toLocaleLowerCase('es').includes(consulta);
  });
}
busqueda.addEventListener('input', () => filtrarCiudades(busqueda.value));
