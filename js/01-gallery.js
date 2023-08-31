import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const str = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
     </a>
   </li>`
}).join(" ");

gallery.insertAdjacentHTML("beforeend", str);

gallery.addEventListener("click", handleOriginalView);

function handleOriginalView(event) {
    if (event.target === event.currentTarget) return;

    event.preventDefault();

    const instance = basicLightbox.create(`
        <div class="modal">
            <img src="${event.target.dataset.source}" alt="${event.target.alt}">        
        </div>
    `)

    instance.show();

    const doc = document;
    doc.addEventListener("keydown", exitESC);
  
    function exitESC(event) {
      if (event.code === "Escape") {
        doc.removeEventListener("keydown", exitESC);
        instance.close();
      }
    }
}
