// Mensaje de bienvenida
alert("¡Bienvenido a la galería de libros de Halo!");

// Mostrar derechos reservados en el footer
document.getElementById("copyright").textContent =
    `Todos los derechos reservados © Nestor Diosnel Ruiz Rotela ${new Date().getFullYear()}`;


// Pedir edad
let edad = prompt("¿Cuántos años tienes?");

if (edad && !isNaN(edad)) {
    edad = Number(edad);

    if (edad > 20) {
        document.getElementById("mensajeEdad").textContent = `Tienes ${edad} años, ¡eres mayor de 20! 🎉`;
    } else {
        document.getElementById("mensajeEdad").textContent = `Tienes ${edad} años, aún eres joven 😄`;
    }
} else {
    document.getElementById("mensajeEdad").textContent = "Edad no válida. Intenta nuevamente.";
}
