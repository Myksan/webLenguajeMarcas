let dots = 0;
function updateLoadingText() {
    const loadingText = document.getElementById("loadingText");
    loadingText.textContent = "Cargando" + ".".repeat(dots);
    dots = (dots + 1) % 4;
}
const loadingInterval = setInterval(updateLoadingText, 400);

window.addEventListener("load", function () {
    setTimeout(() => {
        clearInterval(loadingInterval);
        document.getElementById("loadingScreen").classList.add("hidden");
        document.getElementById("content").style.visibility = "visible";
    }, 8000);
});


