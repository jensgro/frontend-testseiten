// Variable cont fragt nach allen Containern mit dem data-Attrbut data-container
// An alle diese Container wird in das data-Attribut data-width die jeweilige Breite des Containers geschrieben
console.log('width.js geladen');
let cont = document.querySelectorAll('[data-container]');
// Schleife durch alle Container
cont.forEach(c => {
    c.dataset.width = c.offsetWidth + 'px';
});
// Eventlistener auf Fenstergrößeänderung
window.addEventListener('resize', () => {
    // Schleife durch alle Container
    cont.forEach(c => {
        c.dataset.width = c.offsetWidth + 'px';
    });
});     // Ende der Eventlistener-Funktion