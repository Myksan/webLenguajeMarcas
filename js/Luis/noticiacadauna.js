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
        
        // Ejecutar código asociado después de cargar el contenido
        ejecutarCodigo();
    } catch (error) {
        console.error('Error cargando la página:', error);
    }
}

// Manejar el evento de cambio de hash
function handleHashChange() {
    const hash = window.location.hash.replace('#', '') || 'inicio'; // Si no hay hash, carga 'inicio'
    loadContent(hash);
}

// Cargar contenido inicial al abrir la página
document.addEventListener('DOMContentLoaded', handleHashChange);

// Detectar cambios en el hash de la URL
window.addEventListener('hashchange', handleHashChange);

// Función que maneja los botones, likes, comentarios, etc.
function ejecutarCodigo() {
    // ==================== BOTÓN DE VOLVER ====================
    setTimeout(() => {
        const backButton = document.getElementById("back-buttonL");

        if (backButton) {
            console.log("🔄 Botón de Volver encontrado en el DOM.");
            backButton.addEventListener("click", function () {
                console.log("🔙 Botón de Volver presionado.");
                // Redirigir a la página de noticias
                window.location.hash = "#noticias"; // Cambia a la sección #noticias
            });
        }

    }, 500); // Esperamos 500ms para asegurarnos de que el DOM ha cargado

    // ==================== SCROLL A SECCIONES CON RESALTADO ====================
    setTimeout(() => {
        const scrollButtons = document.querySelectorAll(".scroll-buttonL");

        if (scrollButtons.length > 0) {
            console.log("📌 Botones de navegación detectados.");
            scrollButtons.forEach(button => {
                button.addEventListener("click", function () {
                    let targetId = this.getAttribute("data-target");
                    let targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        console.log(`📍 Navegando a: ${targetId}`);
                        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });

                        // Efecto de resaltado temporal
                        let originalColor = window.getComputedStyle(targetElement).backgroundColor;
                        targetElement.style.transition = "background-color 0.5s ease-in-out";
                        targetElement.style.backgroundColor = "#ffffcc";

                        setTimeout(() => {
                            targetElement.style.backgroundColor = originalColor;
                        }, 2000);
                    } else {
                        console.warn(`⚠️ No se encontró la sección: ${targetId}`);
                    }
                });
            });
        }

    }, 500);

    // ==================== SISTEMA DE LIKES ====================
    setTimeout(() => {
        const likeButton = document.getElementById("like-buttonL");
        const likeDisplay = document.getElementById("like-countL");
        let likeCount = 0;

        if (likeButton && likeDisplay) {
            console.log("👍 Botón de Like encontrado.");
            likeButton.addEventListener("click", function () {
                likeCount++;
                likeDisplay.innerText = likeCount;
                console.log(`✅ Like agregado. Total: ${likeCount}`);
            });
        }

    }, 500);

    // ==================== SISTEMA DE COMENTARIOS ====================
    setTimeout(() => {
        const commentButton = document.getElementById("comment-buttonL");
        const commentInput = document.getElementById("comment-inputL");
        const commentList = document.getElementById("comments-listL");

        if (commentButton && commentInput && commentList) {
            console.log("💬 Sistema de comentarios activo.");
            commentButton.addEventListener("click", function () {
                let commentText = commentInput.value.trim();

                if (commentText) {
                    let newComment = document.createElement("li");
                    newComment.textContent = commentText;
                    commentList.appendChild(newComment);
                    commentInput.value = "";
                    console.log("📝 Comentario agregado:", commentText);
                } else {
                    console.warn("⚠️ No puedes agregar un comentario vacío.");
                }
            });
        }

    }, 2000);
}

// Detectar clics en los enlaces del menú y ocultar el menú colapsable
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
