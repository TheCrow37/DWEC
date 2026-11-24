const nuevaLista = () => ({ propietario: 'Ana', productos: ['pan', 'leche'] });

const lista1 = nuevaLista();
const igual = lista1;
igual.productos.push('huevos');
console.log('A productos:', lista1.productos);
console.log('A misma referencia:', lista1 === igual);

const lista2 = nuevaLista();
const superficial = { ...lista2 };
superficial.propietario = 'Luis';
superficial.productos.push('queso');
console.log('B original propietario:', lista2.propietario);
console.log('B productos original:', lista2.productos);

const lista3 = nuevaLista();
const profunda = structuredClone(lista3);
profunda.propietario = 'Marta';
profunda.productos.push('fruta');
console.log('C original:', lista3);
console.log('C copia:', profunda);
