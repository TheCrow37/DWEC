const miniaturasContenedor = document.getElementById('miniaturas');
const colores = [['#275dad','Montañas'],['#e98145','Atardecer'],['#319b77','Bosque'],['#a95ba5','Flores']];
const crearImagen = (color, texto) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="480"><rect width="100%" height="100%" fill="${color}"/><circle cx="620" cy="120" r="70" fill="#fff" opacity=".65"/><text x="50%" y="55%" text-anchor="middle" font-family="sans-serif" font-size="54" fill="white">${texto}</text></svg>`)}`;
colores.forEach(([color, texto]) => {
  const imagen = document.createElement('img');
  imagen.className = 'miniatura'; imagen.alt = texto; imagen.src = crearImagen(color, texto);
  miniaturasContenedor.append(imagen);
});
function cambiarImagenPrincipal(indice) {
  const miniaturas = document.querySelectorAll('.miniatura');
  const miniatura = miniaturas[indice];
  if (!miniatura) return;
  document.getElementById('imagen-principal').src = miniatura.getAttribute('src');
  document.getElementById('imagen-principal').alt = miniatura.alt;
  resaltarMiniatura(indice);
}
function resaltarMiniatura(indice) {
  const miniaturas = document.querySelectorAll('.miniatura');
  miniaturas.forEach((miniatura, posicion) => miniatura.classList.toggle('activa', posicion === indice));
}
miniaturasContenedor.addEventListener('click', evento => {
  const miniatura = evento.target.closest('.miniatura');
  if (miniatura) cambiarImagenPrincipal(Array.from(miniaturasContenedor.children).indexOf(miniatura));
});
cambiarImagenPrincipal(0);
