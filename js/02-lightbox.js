import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

function createGalleryItems(images) {
  return images
    .map(({ preview, original }) => {
      return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            />
            </a>
            </div>`;
    })
    .join("");
}

const galItem = createGalleryItems(galleryItems);

galleryContainer.innerHTML = galItem;

galleryContainer.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
}

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
