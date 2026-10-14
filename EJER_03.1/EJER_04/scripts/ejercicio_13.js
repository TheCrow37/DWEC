// 13. Cambiar la imagen del primer curso (JavaScript Moderno).
const primeraTarjeta = document.querySelector('#lista-cursos .card');
const imagen = primeraTarjeta?.querySelector('img');
if (imagen) imagen.src = 'img/hacer4.jpg';
