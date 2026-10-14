// 29. Añadir el atributo data-tipo a todos los enlaces de navegación.
document.querySelectorAll('.navegacion a').forEach(enlace => {
  enlace.setAttribute('data-tipo', 'enlace-nav');
});
