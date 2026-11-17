const botonesPestanas = document.getElementById('botones-pestanas');
const contenidos = document.getElementById('contenidos');
botonesPestanas.addEventListener('click', evento => {
  const boton = evento.target.closest('button[data-id]');
  if (!boton || !botonesPestanas.contains(boton)) return;
  contenidos.querySelectorAll('.contenido').forEach(contenido => contenido.classList.add('oculto'));
  document.getElementById(boton.dataset.id)?.classList.remove('oculto');
  botonesPestanas.querySelectorAll('button').forEach(elemento => elemento.classList.toggle('pestana-activa', elemento === boton));
});
