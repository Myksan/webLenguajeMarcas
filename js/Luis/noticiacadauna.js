document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript cargado correctamente");

    // Manejo de desplazamiento suave y resaltado
    const scrollButtons = document.querySelectorAll(".scroll-buttonL");

    scrollButtons.forEach(button => {
        button.addEventListener("click", function () {
            let targetId = this.getAttribute("data-target");
            let targetElement = document.querySelector("#" + targetId);

            if (targetElement) {
                console.log("Desplazándose a:", targetId);
                targetElement.scrollIntoView({ behavior: "smooth", block: "center" });

                // Guardar color original
                let originalColor = window.getComputedStyle(targetElement).backgroundColor;

                // Efecto de resaltado temporal
                targetElement.style.transition = "background-color 0.5s ease-in-out";
                targetElement.style.backgroundColor = "#ffffcc";

                setTimeout(() => {
                    targetElement.style.backgroundColor = originalColor;
                }, 1000);
            } else {
                console.warn("Elemento no encontrado:", targetId);
            }
        });
    });

    // Agregar funcionalidad al botón de "Volver"
    document.getElementById("back-button").addEventListener("click", function () {
        history.back();
    });
});
