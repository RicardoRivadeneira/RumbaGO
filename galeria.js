document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".close");

    let scrollAmount = 0;

    // Navegar carrusel
    next.addEventListener("click", () => {
        carousel.scrollBy({ left: 300, behavior: "smooth" });
    });

    prev.addEventListener("click", () => {
        carousel.scrollBy({ left: -300, behavior: "smooth" });
    });

    // Abrir imagen en modal
    document.querySelectorAll(".carousel img").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });

    // Cerrar modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
