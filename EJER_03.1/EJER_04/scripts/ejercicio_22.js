// 22. Evitar el envío normal del formulario y mostrar nombre y mensaje en consola.
const formulario = document.getElementById('formulario-contacto');
if (formulario) {
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombre = formulario.querySelector('#nombre')?.value ?? '';
    const mensaje = formulario.querySelector('#mensaje')?.value ?? '';
    console.log('Nombre:', nombre);
    console.log('Mensaje:', mensaje);
  });
}
