document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript cargado correctamente");

    // Función para mostrar más contenido al hacer clic en "Leer más"
    const readMoreBtn = document.getElementById("read-more");
    const extraContent = document.getElementById("extra-content");

    if (readMoreBtn && extraContent) {
        readMoreBtn.addEventListener("click", function () {
            if (extraContent.style.display === "none" || extraContent.style.display === "") {
                extraContent.style.display = "block";
                readMoreBtn.textContent = "Leer menos";
            } else {
                extraContent.style.display = "none";
                readMoreBtn.textContent = "Leer más";
            }
        });
    }

    // Crear un botón para volver atrás en la página
    const backButton = document.createElement("button");
    backButton.textContent = "← Volver";
    backButton.id = "back-button";

    // Estilos para el botón de volver atrás
    backButton.style.position = "fixed";
    backButton.style.top = "20px";
    backButton.style.left = "20px";
    backButton.style.padding = "10px 15px";
    backButton.style.fontSize = "16px";
    backButton.style.background = "#007BFF";
    backButton.style.color = "#fff";
    backButton.style.border = "none";
    backButton.style.borderRadius = "5px";
    backButton.style.cursor = "pointer";
    backButton.style.zIndex = "1000";
    backButton.style.transition = "background 0.3s ease";

    // Efecto hover para el botón
    backButton.addEventListener("mouseover", function () {
        backButton.style.background = "#0056b3";
    });

    backButton.addEventListener("mouseout", function () {
        backButton.style.background = "#007BFF";
    });

    // Función para volver atrás en la historia del navegador
    backButton.addEventListener("click", function () {
        window.history.back();
    });

    // Agregar el botón al cuerpo del documento
    document.body.appendChild(backButton);
});
