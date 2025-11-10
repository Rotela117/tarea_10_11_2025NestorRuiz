// Mensaje de bienvenida
alert("¡Bienvenido a la página principal!");

// Preguntar por el nombre del usuario
let nombre = prompt("¿Cuál es tu nombre?");

if (nombre) {
    // Mostrar el nombre en el header
    document.getElementById("nombreUsuario").textContent = `Hola, ${nombre} 👋`;

    // Mostrar los derechos reservados en el footer
    document.getElementById("copyright").textContent = `Todos los derechos reservados ©  Nestor Diosnel Ruiz Rotela ${new Date().getFullYear()}`;
} else {
    document.getElementById("nombreUsuario").textContent = "Hola, Invitado 👋";
    document.getElementById("copyright").textContent = `Todos los derechos reservados ©${new Date().getFullYear()}`;
}
