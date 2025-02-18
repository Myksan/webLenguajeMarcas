document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript cargado correctamente");

    // Asegurar que el scroll esté activado
    document.body.style.overflow = "auto";
    
    // Botón Volver Atrás
    const backButton = document.getElementById("back-button");
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.history.back();
        });
    }

    // Función de desplazamiento suave al hacer clic en los botones de sección
    const scrollButtons = document.querySelectorAll(".scroll-button");

    scrollButtons.forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});
document.querySelectorAll(".scroll-button").forEach(button => {
    button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "center" });

            // Agregar un efecto de resaltado temporal
            targetElement.style.transition = "box-shadow 0.2s ease-in-out";
            targetElement.style.boxShadow = "0 0 15px rgba(0, 123, 255, 0.6)";

            setTimeout(() => {
                targetElement.style.boxShadow = "none";
            }, 700);
        }
    });
});
