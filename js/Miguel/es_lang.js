document.addEventListener("DOMContentLoaded", function () {
    const enlace = document.getElementById("esp");
    const imagen = document.createElement("img");
    const audio = new Audio("js/Miguel/himno.mp3");
    
    imagen.src = "img/esp.webp"; 
    imagen.style.display = "none";
    imagen.style.position = "fixed";
    imagen.style.top = "50%";
    imagen.style.left = "50%";
    imagen.style.transform = "translate(-50%, -50%)";
    imagen.style.zIndex = "9999"; // Asegura que esté por encima de todo
    imagen.style.pointerEvents = "none"; // Evita interferencias con otros elementos
    
    document.body.appendChild(imagen);
    
    enlace.addEventListener("click", function (event) {
        event.preventDefault(); // Evita la navegación del enlace
        imagen.style.display = "block";
        audio.play();
        
        setTimeout(() => {
            imagen.style.display = "none";
            audio.pause();
            audio.currentTime = 0;
        }, 12300); // Oculta la imagen y detiene la música después de 10 segundos
    });
});
