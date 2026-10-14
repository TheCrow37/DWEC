// 28. Crear un array con los nombres de las categorías y mostrarlo.
const nombresCategorias = Array.from(document.querySelectorAll('#lista-cursos .categoria'))
  .map(categoria => categoria.textContent.trim());
console.log(nombresCategorias);
