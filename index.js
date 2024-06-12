const letras = "abcdefghijklmnopqrstuvwxyz";
const mayusculas = letras.toUpperCase();
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+[]{}|;:',.<>?";

function generarContraseña(longitud, incluirLetras, incluirMayusculas, incluirNumeros, incluirSimbolos) {
    let todosLosCaracteres = "";
    if (incluirLetras) todosLosCaracteres += letras;
    if (incluirMayusculas) todosLosCaracteres += mayusculas;
    if (incluirNumeros) todosLosCaracteres += numeros;
    if (incluirSimbolos) todosLosCaracteres += simbolos;

    if (!todosLosCaracteres.length) return "Selecciona al menos un tipo de carácter.";

    let contraseña = "";
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * todosLosCaracteres.length);
        contraseña += todosLosCaracteres[indiceAleatorio];
    }
    
    return contraseña;
}

document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const longitud = parseInt(document.getElementById('length').value);
    const incluirLetras = document.getElementById('includeLowercase').checked;
    const incluirMayusculas = document.getElementById('includeUppercase').checked;
    const incluirNumeros = document.getElementById('includeNumbers').checked;
    const incluirSimbolos = document.getElementById('includeSymbols').checked;

    const contraseñaGenerada = generarContraseña(longitud, incluirLetras, incluirMayusculas, incluirNumeros, incluirSimbolos);
    document.getElementById('result').textContent = `Contraseña generada: ${contraseñaGenerada}`;
});señas();
