// 18. Aplicar borde rojo al elemento main que precede al footer.
const footer = document.getElementById('footer-principal');
const contenidoPrincipal = footer?.previousElementSibling;
if (contenidoPrincipal) contenidoPrincipal.style.border = '2px solid red';
