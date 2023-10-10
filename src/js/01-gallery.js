// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import '../css/01-gallery.css';
import '../css/common.css';

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = createGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
        .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionType: "alt",
    captionDelay: 250,

});


