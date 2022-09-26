import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryContentArr = [];

galleryItems.forEach((galleryItem) => {
  let galleryContentElement = `<div class="gallery__item"><a class="gallery__link" href="${galleryItem.original}"><img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}" alt="${galleryItem.description}"/></a></div>`;
  galleryContentArr.push(galleryContentElement);
});

const galleryContentStr = galleryContentArr.join("");
gallery.insertAdjacentHTML("afterbegin", galleryContentStr);

const openModal = (event) => {
  event.preventDefault();
  if (event.target === gallery) {
    return;
  }
  const closeModalEsc = (event) => {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  };
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => window.addEventListener("keydown", closeModalEsc),
      onClose: () => window.removeEventListener("keydown", closeModalEsc),
    }
  );

  instance.show();
};

gallery.addEventListener("click", openModal);
