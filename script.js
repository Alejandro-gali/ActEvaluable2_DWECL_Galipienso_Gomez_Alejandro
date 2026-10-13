// Ejercicio 1. Información del navegador
const url = window.location.href;
const nombreNavegador = window.navigator.userAgent;
const ancho = window.screen.height;
const alto = window.screen.width;
const idioma = window.navigator.language;

document.getElementById("url").textContent = url;
document.getElementById("info").textContent = nombreNavegador;
document.getElementById("tam").textContent = `El ancho es ${ancho} y el alto es ${alto}.`;
document.getElementById("idioma").textContent = idioma;

// Ejercicio 2. Ventana y dimensiones
const anchoDisponible = window.innerHeight;
const altoDisponible = window.innerWidth;

function mostrar_dimensiones() {
    window.alert(`El ancho es ${ancho} y el alto es ${alto}. ` +
        ` El ancho disponible es ${anchoDisponible} y el alto disponible es ${altoDisponible}`
    );
}

// Ejercicio 3. Navegación
function volver() {
    window.history.back();
}

function refrescar() {
    window.location.reload();
}

// Ejercicio 4. Temporizador
const temporizador = 30;
let contador = temporizador;

function iniciar() {

    const interval = setInterval(() => {
        document.getElementById("contador").textContent = contador;
        contador--;

        if (contador == 0) {
            clearInterval(interval);
            document.getElementById("contador").textContent = "El contador ha legado a 0.";
        }

    }, 1000);
}

function detener() {

    document.getElementById("contador").textContent = "El contador se ha detenido.";
}

// Ejercicio 5. Ventana Emergente
function abrir_ventana() {
    window.location.href = "https://www.google.com/?hl=es";
}

function cerrar_ventana() {
    window.close();
}

// Ejercicio 6. Confirmación y entrada de datos
function cambiar_fondo() {
    const confirmacion = window.confirm("¿Desea cambiar el fondo?");

    if (confirmacion) {
        const color = window.prompt("Introduzca el color al que quiere cambiar: ");
        if (color) {
            window.document.body.style.backgroundColor = color;
        }
    }
}

// Ejercicio 7. Información mediante cuadros de diálogo
function mostrar_info() {
    const nombre = window.prompt("Introduce tu nombre. ");

    if (nombre == null || !nombre) {
        window.alert("No se ha introducido ningún nombre.");
    } else {
        window.alert(`Bienvenido ${nombre}`);
    }
}

// Ejercicio 8. control del tamaño de la ventana
function comprobar_tam(){
    const ancho = window.innerWidth;

    if(ancho < 768){
        document.getElementById("comp-ancho").textContent = "Ventana pequeña. Ancho actual: " + ancho;
    } else {
        document.getElementById("comp-ancho").textContent = "Ventana grande. Ancho actual: " + ancho;
    }
}