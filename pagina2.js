// Mensaje de bienvenida
alert("¡Bienvenido a la página de operaciones matemáticas!");

// Mostrar derechos reservados en el footer
document.getElementById("copyright").textContent =
    `Todos los derechos reservados © Nestor Diosnel Ruiz Rotela ${new Date().getFullYear()}`;


// Función para multiplicar
function multiplicar() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (!isNaN(num1) && !isNaN(num2)) {
        let resultado = num1 * num2;
        document.getElementById("resultado").textContent = `Resultado: ${num1} × ${num2} = ${resultado}`;
    } else {
        alert("Por favor ingresa números válidos.");
    }
}

// Función para exponente al cuadrado
function exponente() {
    let num = parseFloat(prompt("Ingresa un número:"));
    if (!isNaN(num)) {
        let resultado = num ** 2;
        document.getElementById("resultado").textContent = `Resultado: ${num}² = ${resultado}`;
    } else {
        alert("Por favor ingresa un número válido.");
    }
}

// Función para restar
function restar() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (!isNaN(num1) && !isNaN(num2)) {
        let resultado = num1 - num2;
        document.getElementById("resultado").textContent = `Resultado: ${num1} - ${num2} = ${resultado}`;
    } else {
        alert("Por favor ingresa números válidos.");
    }
}
