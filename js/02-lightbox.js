import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryContentArr = [];

galleryItems.forEach((galleryItem) => {
  let galleryContentElement = `<a class="gallery__item" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" title="${galleryItem.description}" alt="${galleryItem.description}" /></a>`;
  galleryContentArr.push(galleryContentElement);
});

const galleryContentStr = galleryContentArr.join("");
gallery.insertAdjacentHTML("afterbegin", galleryContentStr);

const openModal = (event) => {
  event.preventDefault();
  if (event.target === gallery) {
    return;
  }
  var lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
  });
};

gallery.addEventListener("click", openModal);
