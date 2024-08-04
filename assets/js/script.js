

function agrandarimagen() {
    var imagen = event.target; // Obtiene la imagen clickeada
    if (imagen.style.width === "100%") {
        imagen.style.width = ""; 
    } else {
        imagen.style.width = "100%"; 
    }
}


