
const botonMenu = document.querySelector(".menu");
const navegacion = document.querySelector("nav");

if (botonMenu) {
    botonMenu.addEventListener("click", function () {
        navegacion.classList.toggle("abierto");
    });
}

document.querySelectorAll("nav a").forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        navegacion.classList.remove("abierto");
    });
});
