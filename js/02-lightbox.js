import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const str = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         alt="${description}"
       />
     </a>
   </li>`
}).join(" ");

gallery.insertAdjacentHTML("beforeend", str);

const lightbox = new SimpleLightbox('.gallery a', {captionsData:'alt',captionDelay:250});

