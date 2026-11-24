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
const segundosDesde = (inicio) => ((Date.now() - inicio) / 1000).toFixed(1);

let inicio = Date.now();
for (const id of [1, 2, 3]) await buscarLibro(id);
console.log(`Una detrás de otra: ${segundosDesde(inicio)} s`);

inicio = Date.now();
await Promise.all([1, 2, 3].map((id) => buscarLibro(id)));
console.log(`Con Promise.all: ${segundosDesde(inicio)} s`);

const resultados = await Promise.allSettled([1, 99, 3].map((id) => buscarLibro(id)));
const cumplidas = resultados.filter((resultado) => resultado.status === 'fulfilled').length;
const rechazadas = resultados.filter((resultado) => resultado.status === 'rejected').length;
console.log(`allSettled: ${cumplidas} cumplidas y ${rechazadas} rechazada`);
