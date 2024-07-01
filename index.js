document.addEventListener('DOMContentLoaded', () => {
    const letras = "abcdefghijklmnopqrstuvwxyz";
    const mayusculas = letras.toUpperCase();
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+[]{}|;:',.<>?";


    const savedSettings = JSON.parse(localStorage.getItem('passwordSettings')) || {};
    if (savedSettings.length) document.getElementById('length').value = savedSettings.length;
    if (savedSettings.includeLowercase) document.getElementById('includeLowercase').checked = savedSettings.includeLowercase;
    if (savedSettings.includeUppercase) document.getElementById('includeUppercase').checked = savedSettings.includeUppercase;
    if (savedSettings.includeNumbers) document.getElementById('includeNumbers').checked = savedSettings.includeNumbers;
    if (savedSettings.includeSymbols) document.getElementById('includeSymbols').checked = savedSettings.includeSymbols;


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

        if (contraseñaGenerada !== "Selecciona al menos un tipo de carácter.") {
            document.getElementById('copyButton').style.display = 'block';
        } else {
            document.getElementById('copyButton').style.display = 'none';
        }

        const settings = {
            length: longitud,
            includeLowercase: incluirLetras,
            includeUppercase: incluirMayusculas,
            includeNumbers: incluirNumeros,
            includeSymbols: incluirSimbolos
        };
        localStorage.setItem('passwordSettings', JSON.stringify(settings));
    });

    document.getElementById('copyButton').addEventListener('click', function() {
        const contraseña = document.getElementById('result').textContent.replace('Contraseña generada: ', '');
        navigator.clipboard.writeText(contraseña).then(() => {
            alert('Contraseña copiada al portapapeles.');
        }).catch(err => {
            alert('Hubo un error al copiar la contraseña: ' + err);
        });
    });
});