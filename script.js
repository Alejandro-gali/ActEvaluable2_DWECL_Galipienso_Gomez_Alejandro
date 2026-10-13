// Ejercicio 1. Información del navegador
const url = window.location.href;
const nombreNavegador = window.navigator.userAgent;
const ancho = window.screen.height;
const alto = window.screen.width;
const idioma = window.navigator.language;
const anchoDisponible = window.innerHeight;
const altoDisponible = window.innerWidth;

document.getElementById("url").textContent = url;
document.getElementById("info").textContent = nombreNavegador;
document.getElementById("tam").textContent = `El ancho es ${ancho} y el alto es ${alto}.`;
document.getElementById("idioma").textContent = idioma;

// Ejercicio 2. Ventana y dimensiones
function mostrar_dimensiones(){
    window.alert(`El ancho es ${ancho} y el alto es ${alto}. ` + 
        ` El ancho disponible es ${anchoDisponible} y el alto disponible es ${altoDisponible}`
    );
}

// Ejercicio 3. Navegación
function volver(){
    window.history.back();
}

function refrescar(){
    window.location.reload();
}