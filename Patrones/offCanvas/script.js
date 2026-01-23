// Selección de elementos
const sidePanel = document.getElementById('sidePanel');
const menuBtn = document.getElementById('menuBtn');
const body = document.body;

// Función para alternar el menú
function toggleMenu() {
    sidePanel.classList.toggle('open');
}

menuBtn.addEventListener('click', toggleMenu);

// Lógica de Hammer.js para gestos táctiles
const mc = new Hammer(body);

// Detectar deslizamiento a la derecha (abrir)
mc.on("swiperight", function() {
    sidePanel.classList.add('open');
});

// Detectar deslizamiento a la izquierda (cerrar)
mc.on("swipeleft", function() {
    sidePanel.classList.remove('open');
});