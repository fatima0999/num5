// Selecciona el primer elemento que tenga la clase 'card_inner' y lo almacena en la variable 'card'
const card = document.querySelector('.card_inner');

// Agrega un event listener que se activa cuando se hace clic en 'card'
card.addEventListener('click', function() {
    // Cuando se hace clic en 'card', se ejecuta esta función anónima
    // Toggle es un método que agrega una clase si no está presente y la quita si ya está presente
    card.classList.toggle('is-flipped');
    // Con esto, se alterna entre agregar y quitar la clase 'is-flipped' en 'card'
});
