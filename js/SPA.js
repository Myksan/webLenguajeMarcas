// Archivo SPA.js

// Función para cargar contenido desde un archivo HTML
async function loadContent(page) {
    try {
      // Ruta del archivo HTML correspondiente a la página
      const response = await fetch(`secciones/${page}.html`); // Cambia según la estructura de tu proyecto
  
      // Verificar si el archivo existe
      if (!response.ok) {
        document.getElementById('bakemono').innerHTML = `<h1>404</h1><p>Página no encontrada</p>`;
        return;
      }
  
    // Cargar el contenido del archivo en el <main>
    const content = await response.text();
    document.getElementById('bakemono').innerHTML = content;
    } catch (error) {
      console.error('Error cargando la página:', error);
    }
  }
  
  // Manejar el evento de cambio de hash
  function handleHashChange() {
    const hash = window.location.hash.replace('#', '') || 'inicio'; // Si no hay hash, carga 'home'
    loadContent(hash);
  }

  // Cargar contenido inicial al abrir la página
  document.addEventListener('DOMContentLoaded', handleHashChange);
  
  // Detectar cambios en el hash de la URL
  window.addEventListener('hashchange', handleHashChange);

// Detecta clics en los enlaces del menú y oculta el menú colapsable si está abierto
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link"); // Todos los enlaces del menú
  const navbarCollapse = document.querySelector(".navbar-collapse"); // Contenedor del menú colapsable

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        // Si el menú está abierto, lo colapsamos
        const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
        collapseInstance.hide();
      }
    });
  });
});