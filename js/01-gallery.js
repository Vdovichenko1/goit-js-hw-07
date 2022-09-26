import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

function createGalleryItems(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
</div>
    `;
    })
    .join("");
}

const galItem = createGalleryItems(galleryItems);

galleryContainer.innerHTML = galItem;

galleryContainer.addEventListener("click", onGalleryClick);

const instance = basicLightbox.create(`
    <img width="800" height="600">
`);

function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  instance.element().querySelector("img").src = e.target.dataset.source;
  instance.show();

  galleryContainer.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}
