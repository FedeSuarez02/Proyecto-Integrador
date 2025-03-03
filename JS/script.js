const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// Para que funcione el carrousel


let indice = 0;
const carousel = document.querySelector(".carousel");
const imagenes = document.querySelectorAll(".carousel img");
const totalImagenes = imagenes.length;

// Función para cambiar imagen manualmente
function cambiarImagen(direccion) {
    indice = (indice + direccion + totalImagenes) % totalImagenes;
    actualizarCarrusel();
}

// Función para actualizar la posición del carrusel
function actualizarCarrusel() {
    const desplazamiento = -indice * 100;
    carousel.style.transform = `translateX(${desplazamiento}%)`;
}

// Deslizar con el dedo en dispositivos táctiles
let startX = 0;

carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) cambiarImagen(1); // Deslizar a la izquierda
    else if (startX < endX - 50) cambiarImagen(-1); // Deslizar a la derecha
});


setInterval(() => cambiarImagen(1), 5000);



    