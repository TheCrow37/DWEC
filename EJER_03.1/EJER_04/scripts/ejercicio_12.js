// 12. Mostrar en el enlace Contacto el número total de cursos.
const totalCursos = document.querySelectorAll('#lista-cursos .card').length;
const enlaceContacto = document.querySelector('.navegacion a[href="#contacto"], .navegacion a:last-child');
if (enlaceContacto) enlaceContacto.textContent = `Contacto (${totalCursos} Cursos)`;
