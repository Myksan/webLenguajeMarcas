document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript cargado correctamente");

    // Función para el desplazamiento suave y resaltado
    const scrollButtons = document.querySelectorAll(".scroll-button");

    scrollButtons.forEach(button => {
        button.addEventListener("click", function () {
            let targetId = this.getAttribute("data-target");
            let targetElement = document.querySelector("#" + targetId);

            if (targetElement) {
                console.log("Desplazándose a:", targetId);
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

                // Efecto de resaltado temporal
                targetElement.style.transition = "background-color 0.5s ease-in-out";
                targetElement.style.backgroundColor = "#ffffcc"; // Amarillo claro para destacar

                setTimeout(() => {
                    targetElement.style.backgroundColor = ""; // Restaurar el color original
                }, 1000);
            } else {
                console.warn("Elemento no encontrado:", targetId);
            }
        });
    });
});
