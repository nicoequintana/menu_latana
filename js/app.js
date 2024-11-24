document.getElementById("reservationForm").addEventListener("submit", function (event) {
    let nombre = document.getElementById("nombre").value.trim();
    let acompañantes = document.getElementById("acompañantes").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let email = document.getElementById("email").value.trim();
    let fecha = document.getElementById("fecha").value.trim();
    let hora = document.getElementById("hora").value.trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let telefonoPattern = /^[0-9]{10}$/;

    if (!nombre || !acompañantes || !telefono || !email || !fecha || !hora) {
        alert("Todos los campos son obligatorios");
        event.preventDefault();
        return;
    }

    if (isNaN(acompañantes) || parseInt(acompañantes) <= 0) {
        alert("El número de acompañantes debe ser válido");
        event.preventDefault();
        return;
    }

    if (!telefonoPattern.test(telefono)) {
        alert("El número de teléfono debe tener 10 dígitos");
        event.preventDefault();
        return;
    }

    if (!emailPattern.test(email)) {
        alert("El formato de email no es válido");
        event.preventDefault();
        return;
    }
});
