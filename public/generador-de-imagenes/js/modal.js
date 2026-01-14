class Modal {
    static init() {
        const modal = document.getElementById("imageModal");
        const span = document.getElementsByClassName("close")[0];

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    static open(img) {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
        modal.style.display = "block";
        modalImg.src = img.src;
    }

    static close() {
        const modal = document.getElementById("imageModal");
        modal.style.display = "none";
    }
}

export default Modal;