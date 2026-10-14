// 30. Cambiar el placeholder del textarea dentro de la sección del formulario.
const seccionFormulario = document.getElementById('formulario-seccion');
const textarea = seccionFormulario?.querySelector('textarea');
if (textarea) textarea.placeholder = 'Escribe aquí tu consulta detallada';
