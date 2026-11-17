const usuarios = [{ nombre: 'Ana', edad: 25 }, { nombre: 'Luis', edad: 30 }, { nombre: 'Marta', edad: 22 }];
function crearTabla(datos) {
  const tabla = document.createElement('table');
  const fragmento = document.createDocumentFragment();
  const encabezado = document.createElement('tr');
  ['Nombre', 'Edad'].forEach(titulo => { const th = document.createElement('th'); th.textContent = titulo; encabezado.append(th); });
  fragmento.append(encabezado);
  datos.forEach(usuario => {
    const fila = document.createElement('tr');
    [usuario.nombre, usuario.edad].forEach(valor => { const celda = document.createElement('td'); celda.textContent = valor; fila.append(celda); });
    fragmento.append(fila);
  });
  tabla.append(fragmento);
  document.getElementById('contenedor-tabla').replaceChildren(tabla);
}
crearTabla(usuarios);
