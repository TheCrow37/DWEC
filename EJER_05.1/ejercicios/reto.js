const titulos = {
  1: 'El nombre de la rosa',
  2: 'Cien años de soledad',
  3: 'Fahrenheit 451',
};
const buscarLibro = (id) =>
  new Promise((resolver, rechazar) => {
    setTimeout(() => {
      if (titulos[id]) resolver({ id, titulo: titulos[id] });
      else rechazar(new Error(`No existe ningún libro con id ${id}`));
    }, 500);
  });
const textoIds = '[3, 1, 99, 2]';

let ids;
try {
  ids = JSON.parse(textoIds);
  if (!Array.isArray(ids)) throw new TypeError('El JSON debe contener un array de ids');
} catch (error) {
  console.log(`No se pudieron leer los ids: ${error.message}`);
  process.exitCode = 1;
}

if (ids) {
  const resultados = await Promise.allSettled(ids.map((id) => buscarLibro(id)));
  let encontrados = 0;
  let inexistentes = 0;
  resultados.forEach((resultado, indice) => {
    const id = ids[indice];
    if (resultado.status === 'fulfilled') {
      console.log(`✔ ${id} · ${resultado.value.titulo}`);
      encontrados++;
    } else {
      console.log(`✘ ${id} · ${resultado.reason.message}`);
      inexistentes++;
    }
  });
  console.log(`${encontrados} encontrados y ${inexistentes} no existen`);
}
