// Selecciona el header
const header = document.getElementById('header');

// Añade el estado inicial transparente
header.classList.add('transparent');

// Detecta el evento scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    // Si el scroll es mayor a 50 píxeles, añade clase "scrolled"
    header.classList.remove('transparent');
    header.classList.add('scrolled');
  } else {
    // Si el scroll es menor, vuelve a ser transparente
    header.classList.remove('scrolled');
    header.classList.add('transparent');
  }
});