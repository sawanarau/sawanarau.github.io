// Select modal elements
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-content");
const closeModal = document.querySelector(".close");

// Open modal when clicking an image
document.querySelectorAll(".gallery-item").forEach(img => {
    img.addEventListener("click", () => {
        // Replace "img_thumbnails" with "img_normal" to get the full-size image
        modal.style.display = "flex";
        modalImg.src = img.src.replace("img_thumbnails", "img_normal");
    });
});

// Close modal when clicking "X"
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const body = document.body;
    const images = document.querySelectorAll(".gallery-item");
    let loadedImages = 0;

    images.forEach((img) => {
        const tempImg = new Image();
        tempImg.src = img.src;
        tempImg.onload = () => {
            loadedImages++;
            if (loadedImages === images.length) {
                preloader.style.display = "none";
                body.style.visibility = "visible";
                body.style.opacity = "1";
            }
        };
    });
});
