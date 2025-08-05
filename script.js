// Abrir modal al hacer clic en el logo
let modal = document.getElementById("logoModal");
let img = document.getElementById("logoImage");
let modalImg = document.getElementById("logoModalImg");
let closeBtn = document.getElementsByClassName("close")[0];

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Cerrar modal al hacer clic en la X
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
