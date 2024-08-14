// Función que se ejecuta al hacer clic en el botón "Encriptar"
document.querySelector('.btn-encriptar').addEventListener('click', function() {
    const inputText = document.querySelector('.encriptar').value;
    const outputText = document.querySelector('.evaluar');
    
    // Verifica si el texto solo contiene letras minúsculas sin acentos
    if (/^[a-z\s]+$/.test(inputText)) {
        outputText.value = encriptarTexto(inputText);
        mostrarTarjeta(true);
    } else {
        alert('Por favor, ingrese solo letras minúsculas y sin acentos.');
        mostrarTarjeta(false);
    }
});

// Función que se ejecuta al hacer clic en el botón "Desencriptar"
document.querySelector('.btn-desencriptar').addEventListener('click', function() {
    const inputText = document.querySelector('.encriptar').value;
    const outputText = document.querySelector('.evaluar');
    
    // Verifica si el texto solo contiene letras minúsculas sin acentos
    if (/^[a-z\s]+$/.test(inputText)) {
        outputText.value = desencriptarTexto(inputText);
        mostrarTarjeta(true);
    } else {
        alert('Por favor, ingrese solo letras minúsculas y sin acentos.');
        mostrarTarjeta(false);
    }
});

// Función para encriptar el texto
function encriptarTexto(texto) {
    const reemplazos = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    
    return texto.split('').map(char => reemplazos[char] || char).join('');
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    const reemplazos = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    
    let resultado = texto;
    for (let clave in reemplazos) {
        resultado = resultado.replace(new RegExp(clave, 'g'), reemplazos[clave]);
    }
    return resultado;
}

// Función para mostrar u ocultar la tarjeta de mensaje
function mostrarTarjeta(mensaje) {
    const tarjeta = document.querySelector('.tarjeta-contenedor');
    const noMessage = document.querySelector('.texto-uno');
    const message = document.querySelector('.texto-dos');
    
    if (mensaje) {
        tarjeta.style.display = 'block';
        noMessage.style.display = 'none';
        message.style.display = 'none';
    } else {
        tarjeta.style.display = 'none';
        noMessage.style.display = 'block';
        message.style.display = 'block';
    }
}

// Función para copiar el texto al portapapeles
document.querySelector('.btn-copiar').addEventListener('click', function() {
    const outputText = document.querySelector('.evaluar');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});
